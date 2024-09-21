import { NotFoundException } from '@nestjs/common';

export class CountryNotFoundException extends NotFoundException {
  constructor() {
    super('Not found Country in event emitter');
  }
}
