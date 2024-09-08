import { BadRequestException } from '@nestjs/common';

export class UserEventBadRequest extends BadRequestException {
  constructor() {
    super(
      'The user you are trying to delete is currently assigned to an event.',
    );
  }
}
