import { PartialType } from '@nestjs/swagger';
import { CreateCulturalNoteDto } from './create-cultural-note.dto';

/**
 * DTO for updating a cultural note.
 *
 * This class extends the `CreateCulturalNoteDto` using `PartialType`, making all fields optional.
 * It is used to update existing cultural note records, allowing partial updates.
 */
export class UpdateCulturalNoteDto extends PartialType(CreateCulturalNoteDto) {}
