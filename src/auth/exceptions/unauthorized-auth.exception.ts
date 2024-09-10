import { UnauthorizedException } from '@nestjs/common';

export class UnauthorizedAuthException extends UnauthorizedException {
  constructor() {
    super('Invalid credentials');
  }
}
