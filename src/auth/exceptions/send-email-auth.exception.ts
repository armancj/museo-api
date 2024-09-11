import { BadGatewayException } from '@nestjs/common';

export class SendEmailAuthException extends BadGatewayException {
  constructor() {
    super('Failed to send email');
  }
}
