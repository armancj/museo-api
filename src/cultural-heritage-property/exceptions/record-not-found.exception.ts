import { NotFoundException } from '@nestjs/common';

/**
 * Exception thrown when a record is not found in the cultural heritage property domain.
 */
export class RecordNotFoundException extends NotFoundException {
  /**
   * Creates a new instance of RecordNotFoundException.
   * @param message Optional custom error message. Defaults to 'Record not found in cultural heritage property domain'.
   */
  constructor(message: string = 'Record not found in cultural heritage property domain') {
    super(message);
  }
}