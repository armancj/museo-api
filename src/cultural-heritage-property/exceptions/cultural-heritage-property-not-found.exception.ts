import { NotFoundException } from '@nestjs/common';

/**
 * Exception thrown when a cultural heritage property is not found.
 */
export class CulturalHeritagePropertyNotFoundException extends NotFoundException {
  /**
   * Creates a new instance of CulturalHeritagePropertyNotFoundException.
   * @param message Optional custom error message. Defaults to 'Cultural heritage property not found'.
   */
  constructor(message: string = 'Cultural heritage property not found') {
    super(message);
  }
}