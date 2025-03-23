import { NotesModel } from '../models/cultural-notes-model';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForStringWithoutHistory } from '../../field-review-status/dto/create.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

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
  @IsOptional()
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  notes?: FieldMetadata<string>;
}
