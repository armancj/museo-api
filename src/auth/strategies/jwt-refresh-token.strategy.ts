
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt.payload';
import { jwtConstants } from "../config/auth.config";
import { Strategy, ExtractJwt } from "passport-jwt";
import {AuthService} from "../auth.service";


@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(

    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshAuthToken'),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(jwtConstants.refreshSecret),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const { refreshAuthToken } = req?.body as any;
    if (!refreshAuthToken) return null;

    const auth = await this.authService.getTokenAuthRefreshById(payload);

    if (!auth)
      throw new UnauthorizedException('Token invalid');


    if (refreshAuthToken != auth.currentHashedRefreshToken) {
      throw new UnauthorizedException('Token invalid');
    }

    const user = await this.authService.getUserById(auth.uuid);


    if (!user) throw new UnauthorizedException('User not found');
    if (!user.isActive() || user.isDeleted()) throw new UnauthorizedException('User not active or is deleting');
    return user;
  }
}
