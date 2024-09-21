import { NotFoundException } from '@nestjs/common';

export class MunicipalityNotFoundException extends NotFoundException {
  constructor() {
    super('Not found Municipality in event emitter');
  }
}
