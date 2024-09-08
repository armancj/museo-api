
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt.payload';
import { jwtConstants } from "../config/auth.config";
import { Strategy, ExtractJwt } from "passport-jwt";


@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(

    private readonly configService: ConfigService,
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

    if (refreshAuthToken) {
      throw new UnauthorizedException('Token invalid');
    }

    const user =payload;
    if (!user) throw new UnauthorizedException('User not found');
    return user;
  }
}
