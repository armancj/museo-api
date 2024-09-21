import { NotFoundException } from '@nestjs/common';

export class ProvinceNotFoundException extends NotFoundException {
  constructor() {
    super('Not found Province in event emitter');
  }
}
