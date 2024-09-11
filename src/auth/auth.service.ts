import {BadRequestException, Injectable, NotFoundException, UnauthorizedException,} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {User} from "../users/entities/user.entity";
import {AuthMongoRepository} from "./repositories/auth-mongo.repository";
import {LoginResponseDto} from "./dto/login-response.dto";
import {JwtPayload} from "./strategies/jwt.payload";
import {jwtConstants} from "./config/auth.config";
import {LoginDto} from "./dto/login-dto";
import * as bcrypt from 'bcrypt';
import {EventEmitter2Adapter} from "../shared/event-emitter/event-emitter.adapter";
import {UserModel} from "../users/models/user.model";
import {EventEmitter} from "../shared/event-emitter/event-emitter.const";
import {UnauthorizedAuthException} from "./exceptions/unauthorized-auth.exception";
import {isEmail} from "class-validator";
import {EditProfileDto} from "./dto/edit-profile.dto";
import {UpdatedUser} from "../users/users.service";
import {ForgotPasswordDto} from "./dto/forgot-password.dto";
import {SendCodeBody} from "../shared/email/email-nodemailer.service";
import {firstValueFrom} from "rxjs";
import {SendEmailAuthException} from "./exceptions/send-email-auth.exception";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly authRepository: AuthMongoRepository,
        private readonly eventEmitter: EventEmitter2Adapter,
    ) {
    }

    async getAuthenticatedUser({email, password}: LoginDto): Promise<User> {
        const filter = isEmail(email) ? {email} : {mobile: email};
        const user = await this.getOneUserRepo(filter);


        if (!user || !(await bcrypt.compare(password, user?.passwordHashed)))
            throw new UnauthorizedException('Invalid credentials');
        return User.create(user);
    }

    private async getOneUserRepo(filter: Partial<UserModel>): Promise<UserModel> {
        const userObservable = await this.eventEmitter
            .emitAsync<UserModel, UserModel>({
                event: EventEmitter.userFound,
                exception: UnauthorizedAuthException,
                values: {...filter, deleted: false, active: true}
            });
        return firstValueFrom(userObservable);
    }

    async login(user: User): Promise<LoginResponseDto> {
        const payload: JwtPayload = {
            roles: user.roles,
            uuid: user.uuid,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
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
            expiresIn: this.configService.get(jwtConstants.refreshExpirationTime),
        });
    }

    private async setCurrentRefreshToken(
        refresh_token: string,
        uuid: string,
        payload: JwtPayload,
    ) {
        return this.authRepository.updateOneAuth(
            {uuid},
            {currentHashedRefreshToken: refresh_token, email: payload?.email},
        );
    }

    async getUserById(uuid: string): Promise<User> {
        const user = await this.getOneUserRepo({uuid});
        if (!user)
            throw new NotFoundException('User not found');
        return User.create(user);
    }

    async editProfile(uuid: string, editProfileDto: EditProfileDto): Promise<boolean> {
        const userObservable = await this.eventEmitter
            .emitAsync<UpdatedUser, boolean>({
                event: EventEmitter.userUpdated,
                exception: UnauthorizedAuthException,
                values: {filter: {uuid}, updateUserDto: editProfileDto}
            });
        return firstValueFrom(userObservable);
    }

    async getTokenAuthRefreshById({uuid}: JwtPayload) {
        const auth = await this.authRepository.findOneAuth({uuid});
        if (auth) return auth;
        return null;
    }

    private generateRandomFiveDigitNumber(): number {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] % 100000;
    }

    async forgotPassword({email}: ForgotPasswordDto): Promise<boolean> {
        const user = await this.getOneUserRepo({email, active: true, deleted: false}).catch(err => null)
        if (!user) throw new NotFoundException('Email not found');

        const code = this.generateRandomFiveDigitNumber();
        const expireCodeDate = Date.now();

        const sendEmailObservable = await this.eventEmitter.emitAsync<SendCodeBody, unknown>({
                event: EventEmitter.sendEmailCode, exception: SendEmailAuthException, values: {code, email}
            }
        );
        await firstValueFrom(sendEmailObservable);

        const auth = await this.authRepository.updateOneAuth(
            {uuid: user.uuid},
            {uuid: user.uuid, code, email, expireCodeDate}
        );
        if (!auth) throw new BadRequestException('Failed to update user in auth repo');
        return true;
    }

}
