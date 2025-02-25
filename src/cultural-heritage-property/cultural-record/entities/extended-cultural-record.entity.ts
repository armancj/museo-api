import { CulturalRecordModel } from '../models/cultural-record';
import { CulturalRecordEntity } from './cultural-record.entity';

/**
 * Extended entity representing a cultural note with an associated UUID.
 *
 * Extends the functionality of `CulturalNoteEntity` by adding a unique identifier (`uuid`).
 */
export class ExtendedCulturalRecordEntity extends CulturalRecordEntity {
  /**
   * Unique identifier for the cultural note.
   */
  uuid: string;

  /**
   * Initializes a new instance of `ExtendedCulturalRecordEntity`.
   *
   * @param option - Partial object containing the `CulturalRecordModel` data along with the `uuid` identifier.
   */
  constructor(option: Partial<CulturalRecordModel & { uuid: string }>) {
    super(option);
    this.uuid = option.uuid;
  }

  /**
   * Factory method to create an instance of `ExtendedCulturalRecordEntity`.
   *
   * @param option - Partial object including `CulturalRecordModel` data and a `uuid` field.
   * @returns A new instance of `ExtendedCulturalNoteEntity`.
   */
  static create(
    option: Partial<CulturalRecordModel & { uuid: string }>,
  ): ExtendedCulturalRecordEntity {
    return new ExtendedCulturalRecordEntity(option);
  }
}
