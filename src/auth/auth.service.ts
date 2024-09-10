import {
    Injectable, UnauthorizedException,
} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@nestjs/config';
import {User} from "../users/entities/user.entity";
import {UsersService} from "../users/users.service";
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


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly authRepository: AuthMongoRepository,
        private readonly eventEmitter: EventEmitter2Adapter,

    ) {
    }


    async getAuthenticatedUser({email, password}: LoginDto) {
        const filter = isEmail(email)? {email}: {mobile: email};
        const user = await this.eventEmitter
            .emitAsync<UserModel, UserModel>(EventEmitter.userFound, UnauthorizedAuthException, filter )

        console.log(user)

        if (!user || !(await bcrypt.compare(password, user?.passwordHashed)))
            throw new UnauthorizedException('Invalid credentials');
        return user;
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
}
