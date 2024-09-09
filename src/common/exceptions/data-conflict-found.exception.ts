import { ConflictException } from '@nestjs/common';

export class DataConflictFoundException extends ConflictException {
  constructor(keyValue: NonNullable<unknown>) {
    super('Conflict: ' + JSON.stringify(keyValue));
  }
}
