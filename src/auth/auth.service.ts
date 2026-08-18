import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { AuthMongoRepository } from './repositories/auth-mongo.repository';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtPayload } from './strategies/jwt.payload';
import { jwtConstants } from './config/auth.config';
import { LoginDto } from './dto/login-dto';
import * as bcrypt from 'bcrypt';
import { EventEmitter2Adapter } from '../shared/event-emitter/event-emitter.adapter';
import { UserModel } from '../users/models/user.model';
import { EventEmitter } from '../shared/event-emitter/event-emitter.const';
import { UnauthorizedAuthException } from './exceptions/unauthorized-auth.exception';
import { isEmail } from 'class-validator';
import { EditProfileDto } from './dto/edit-profile.dto';
import { UpdatedUser } from '../users/users.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { SendCodeBody } from '../shared/email/email-nodemailer.service';
import { firstValueFrom } from 'rxjs';
import { SendEmailAuthException } from './exceptions/send-email-auth.exception';
import { AuthVerifyCodeDto } from './dto/auth-verify-code.dto';
import { AuthChangePasswordDto } from './dto/auth-change-password.dto';
import { JwtSignOptions } from '@nestjs/jwt/dist/interfaces';
import { hashRefreshToken } from '../common/utils/refresh-token-hash';

/**
 * Service responsible for authentication-related functionality
 * including user login, token generation, password reset, and user profile management.
 */
@Injectable()
export class AuthService {
  /**
   * Creates an instance of the AuthService
   *
   * @param jwtService - Service for JWT token generation and validation
   * @param configService - Service for accessing application configuration
   * @param authRepository - Repository for auth-related data operations
   * @param eventEmitter - Event emitter for handling asynchronous events
   */
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly authRepository: AuthMongoRepository,
    private readonly eventEmitter: EventEmitter2Adapter,
  ) {}

  /**
   * Authenticates a user based on email/mobile and password
   *
   * @param loginDto - The login credentials containing email/mobile and password
   * @returns The authenticated user entity
   * @throws UnauthorizedException if credentials are invalid
   */
  async getAuthenticatedUser({ email, password }: LoginDto): Promise<User> {
    const filter = isEmail(email) ? { email } : { mobile: email };
    const user = await this.getOneUserRepo(filter);

    if (!user || !(await bcrypt.compare(password, user?.passwordHashed)))
      throw new UnauthorizedException('Invalid credentials');
    return User.create(user);
  }

  /**
   * Retrieves a single user from the repository based on the provided filter
   *
   * @param filter - Partial user model to filter by (e.g., email, uuid)
   * @returns Promise resolving to the found user model
   * @throws UnauthorizedAuthException if user cannot be found or is unauthorized
   * @private
   */
  private async getOneUserRepo(filter: Partial<UserModel>): Promise<UserModel> {
    const userObservable = this.eventEmitter.emitAsync<UserModel, UserModel>({
      event: EventEmitter.userFound,
      exception: UnauthorizedAuthException,
      values: { ...filter, deleted: false, active: true },
    });
    return firstValueFrom(userObservable);
  }

  async login(user: User): Promise<LoginResponseDto> {
    const payload: JwtPayload = {
      roles: user.roles as string,
      uuid: user.uuid,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      municipal: user.municipal,
      nationality: user.nationality as string,
      province: user.province as string,
    };
    const refresh_token = await this.getJwtRefreshToken(payload);
    await this.setCurrentRefreshToken(refresh_token, user.uuid, payload);
    return {
      ...payload,
      access_token: this.jwtService.sign(payload),
      refresh_token,
    };
  }

  async getJwtRefreshToken(payload: JwtPayload): Promise<string> {
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>(jwtConstants.refreshSecret),
      expiresIn: this.configService.get<string>(
        jwtConstants.refreshExpirationTime,
      ),
    } as JwtSignOptions);
  }

  private async setCurrentRefreshToken(
    refresh_token: string,
    uuid: string,
    payload: JwtPayload,
  ) {
    return this.authRepository.updateOneAuth(
      { uuid },
      {
        currentHashedRefreshToken: hashRefreshToken(refresh_token),
        email: payload?.email,
      },
    );
  }

  async getUserById(uuid: string): Promise<User> {
    const user = await this.getOneUserRepo({ uuid });
    if (!user) throw new NotFoundException('User not found');
    return User.create(user);
  }

  async editProfile(
    uuid: string,
    editProfileDto: EditProfileDto,
  ): Promise<boolean> {
    const userObservable = this.eventEmitter.emitAsync<UpdatedUser, boolean>({
      event: EventEmitter.userUpdated,
      exception: UnauthorizedAuthException,
      values: { filter: { uuid }, updateUserDto: editProfileDto },
    });
    return firstValueFrom(userObservable);
  }

  /**
   * Retrieves the authentication token for a user by UUID
   *
   * @param payload - JWT payload containing the user's UUID
   * @returns Promise resolving to the authentication token or null if not found
   */
  async getTokenAuthRefreshById({ uuid }: JwtPayload): Promise<any | null> {
    const auth = await this.authRepository.findOneAuth({ uuid });
    if (auth) return auth;
    return null;
  }

  private generateRandomFiveDigitNumber(): number {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % 100000;
  }

  /**
   * Initiates the password recovery process for a user
   *
   * @param forgotPasswordDto - DTO containing the email for password recovery
   * @returns Promise resolving to a boolean indicating success
   * @throws NotFoundException if the email is not found
   * @throws BadRequestException if the user cannot be updated in the auth repository
   * @throws SendEmailAuthException if the email cannot be sent
   */
  async forgotPassword({ email }: ForgotPasswordDto): Promise<boolean> {
    const user = await this.getOneUserRepo({
      email,
      active: true,
      deleted: false,
    }).catch(() => null);
    if (!user) throw new NotFoundException('User with this email not found');

    const code = this.generateRandomFiveDigitNumber();
    const expireCodeDate = Date.now();

    const sendEmailObservable = this.eventEmitter.emitAsync<
      SendCodeBody,
      unknown
    >({
      event: EventEmitter.sendEmailCode,
      exception: SendEmailAuthException,
      values: { code, email },
    });
    await firstValueFrom(sendEmailObservable);

    const auth = await this.authRepository.updateOneAuth(
      { uuid: user.uuid },
      { uuid: user.uuid, code, email, expireCodeDate },
    );
    if (!auth)
      throw new BadRequestException(
        'Failed to update user in authentication repository',
      );
    return true;
  }

  /**
   * Verifies a code sent to a user's email
   *
   * @param authVerifyCodeDto - DTO containing the code and email to verify
   * @returns Promise resolving to a boolean indicating success
   * @throws BadRequestException if the code is invalid or expired
   */
  async verifyCode({ code, email }: AuthVerifyCodeDto): Promise<boolean> {
    const userAuth = await this.authRepository.findOneAuth({ code, email });

    if (!userAuth) {
      throw new BadRequestException('Invalid verification code.');
    }

    if (userAuth.isCodeExpired()) {
      throw new BadRequestException('The verification code has expired.');
    }

    return true;
  }

  /**
   * Changes a user's password using a verification code
   *
   * @param authChangePasswordDto - DTO containing the code, email, and new password
   * @returns Promise resolving to a boolean indicating success
   * @throws BadRequestException if the verification code is invalid
   */
  async changePassword(
    authChangePasswordDto: AuthChangePasswordDto,
  ): Promise<boolean> {
    const { code, email, newPassword: password } = authChangePasswordDto;

    const userAuth = await this.authRepository.findOneAuth({ code, email });

    if (!userAuth) {
      throw new BadRequestException('Invalid verification code or email.');
    }

    this.eventEmitter.emit<UpdatedUser>({
      event: EventEmitter.userUpdated,
      values: { filter: { email }, updateUserDto: { password } },
    });

    return true;
  }
}
