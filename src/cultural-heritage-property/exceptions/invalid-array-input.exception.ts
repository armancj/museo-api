import { BadRequestException } from '@nestjs/common';

/**
 * Exception thrown when an array input is expected but not provided in the cultural heritage property domain.
 */
export class InvalidArrayInputException extends BadRequestException {
  /**
   * Creates a new instance of InvalidArrayInputException.
   * @param field The field name that expected an array input.
   */
  constructor(field: string) {
    super(`Input in ${field} is not an array`);
  }
}