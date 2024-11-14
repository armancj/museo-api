import { PartialType } from '@nestjs/swagger';
import { CreateAssociatedDocumentationDto } from './create-associated-documentation.dto';

/**
 * Data Transfer Object (DTO) for updating associated documentation.
 *
 * Extends the `CreateAssociatedDocumentationDto` class, making all fields optional using `PartialType`.
 */
export class UpdateAssociatedDocumentationDto extends PartialType(
  CreateAssociatedDocumentationDto,
) {}
