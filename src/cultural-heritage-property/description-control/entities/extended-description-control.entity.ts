import { DescriptionControl } from './description-control.entity';
import { DescriptionControlModel } from '../models/description-control-model';

/**
 * Extended entity representing a cultural note with an associated UUID.
 *
 * Extends the functionality of `CulturalNoteEntity` by adding a unique identifier (`uuid`).
 */
export class ExtendedDescriptionControlEntity extends DescriptionControl {
  /**
   * Unique identifier for the cultural note.
   */
  uuid: string;

  /**
   * Initializes a new instance of `ExtendedCulturalNoteEntity`.
   *
   * @param option - Partial object containing the `NotesModel` data along with the `uuid` identifier.
   */
  constructor(option: DescriptionControlModel & { uuid: string }) {
    super(option);
    this.uuid = option.uuid;
  }

  /**
   * Factory method to create an instance of `ExtendedCulturalNoteEntity`.
   *
   * @param option - Partial object including `NotesModel` data and a `uuid` field.
   * @returns A new instance of `ExtendedCulturalNoteEntity`.
   */
  static create(
    option: DescriptionControlModel & { uuid: string },
  ): ExtendedDescriptionControlEntity {
    return new ExtendedDescriptionControlEntity(option);
  }
}
