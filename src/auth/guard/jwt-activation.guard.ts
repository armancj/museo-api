import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtActivationGuard extends AuthGuard('jwt-activation-token') {}
