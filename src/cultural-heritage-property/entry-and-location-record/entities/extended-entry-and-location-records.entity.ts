import { EntryAndLocationRecord } from './entry-and-location-record.entity';
import { EntryAndLocationRecordModel } from '../models/entry-and-location-record.model';

/**
 * Extended entity representing a cultural note with an associated UUID.
 *
 * Extends the functionality of `CulturalNoteEntity` by adding a unique identifier (`uuid`).
 */
export class ExtendedEntryAndLocationRecordsEntity extends EntryAndLocationRecord {
  /**
   * Unique identifier for the cultural note.
   */
  uuid: string;

  /**
   * Initializes a new instance of `ExtendedCulturalNoteEntity`.
   *
   * @param option - Partial object containing the `NotesModel` data along with the `uuid` identifier.
   */
  constructor(option: Partial<EntryAndLocationRecordModel & { uuid: string }>) {
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
    option: Partial<EntryAndLocationRecordModel & { uuid: string }>,
  ): ExtendedEntryAndLocationRecordsEntity {
    return new ExtendedEntryAndLocationRecordsEntity(option);
  }
}
