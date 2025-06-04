import { CulturalNoteEntity } from './cultural-note.entity';
import { NotesModel } from '../models/cultural-notes-model';

/**
 * Extended entity representing a cultural note with an associated UUID.
 *
 * Extends the functionality of `CulturalNoteEntity` by adding a unique identifier (`uuid`).
 */
export class ExtendedCulturalNoteEntity extends CulturalNoteEntity {
  /**
   * Unique identifier for the cultural note.
   */
  uuid: string;

  /**
   * Initializes a new instance of `ExtendedCulturalNoteEntity`.
   *
   * @param option - Partial object containing the `NotesModel` data along with the `uuid` identifier.
   */
  constructor(option: Partial<NotesModel & { uuid: string }>) {
    super(option);
    if (option.uuid) this.uuid = option.uuid;
  }

  /**
   * Factory method to create an instance of `ExtendedCulturalNoteEntity`.
   *
   * @param option - Partial object including `NotesModel` data and a `uuid` field.
   * @returns A new instance of `ExtendedCulturalNoteEntity`.
   */
  static create(
    option: Partial<NotesModel & { uuid: string }>,
  ): ExtendedCulturalNoteEntity {
    return new ExtendedCulturalNoteEntity(option);
  }
}
