import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthNameEntity, AuthSchema } from "./schema/auth.schema";
import { EmailModule } from "../shared/email/email.module";
import { AuthJwtModuleConfig } from "./config/auth-jwt-module.config";
import { HandledErrorModule } from "../shared/handled-error/handled-error.module";
import { AuthService } from "./auth.service";
import { JwtRefreshTokenStrategy } from "./strategies/jwt-refresh-token.strategy";
import {AuthMongoRepository} from "./repositories/auth-mongo.repository";
import {SharedModule} from "../shared/shared.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AuthNameEntity, schema: AuthSchema }]),
    SharedModule,
    PassportModule,
    EmailModule,
    JwtModule.registerAsync({
      imports: undefined,
      useClass: AuthJwtModuleConfig
    }),
    HandledErrorModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthMongoRepository,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshTokenStrategy,
  ],
})
export class AuthModule {}
