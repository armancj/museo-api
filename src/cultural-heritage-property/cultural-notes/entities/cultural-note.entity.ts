import { NotesModel } from '../models/cultural-notes-model';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForString } from '../../field-review-status/dto/field-metadata-string.dto';

/**
 * Entity representing a cultural note.
 *
 * This entity is used to encapsulate the properties and methods related to cultural notes.
 * It implements the `NotesModel` interface to ensure the data structure conforms to the model.
 */
export class CulturalNoteEntity implements NotesModel {
  /**
   * Content of the cultural note.
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  notes: FieldMetadata<string>;

  /**
   * Constructor to initialize a `CulturalNoteEntity`.
   *
   * @param option - Partial data based on the `NotesModel` to create a new instance.
   */
  constructor(option: Partial<NotesModel>) {
    this.notes = FieldReviewStatusEntity.create(option.notes);
  }

  /**
   * Factory method to create a new `CulturalNoteEntity` instance.
   *
   * @param option - Partial data based on the `NotesModel`.
   * @returns A new instance of `CulturalNoteEntity`.
   */
  static create(option: Partial<NotesModel>): CulturalNoteEntity {
    return new CulturalNoteEntity(option);
  }
}
