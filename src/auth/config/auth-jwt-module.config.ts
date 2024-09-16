import {
  JwtModuleOptions,
  JwtOptionsFactory,
} from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './auth.config';

@Injectable()
export class AuthJwtModuleConfig implements JwtOptionsFactory {
  constructor(private readonly config: ConfigService) {}
  createJwtOptions(): Promise<JwtModuleOptions> | JwtModuleOptions {
    return {
      secret: this.config.get<string>(jwtConstants.secret),
      signOptions: {
        expiresIn: this.config.get<string>(jwtConstants.expirationTime),
      },
    };
  }
}
