import { NotesModel } from '../models/cultural-notes-model';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';
import { Type } from 'class-transformer';

/**
 * DTO for creating a cultural note.
 *
 * This class defines the structure of the data transfer object for creating cultural notes.
 * It includes validation rules to ensure the data integrity.
 */
export class CreateCulturalNoteDto implements NotesModel {
  /**
   * Cultural note content.
   *
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  notes?: FieldMetadataDto<string>;
}
