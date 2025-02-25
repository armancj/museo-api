import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedEntryAndLocationRecordsEntity } from './extended-entry-and-location-records.entity';
import { EntryAndLocationRecord } from './entry-and-location-record.entity';

/**
 * Entity representing a collection of entry and location records.
 *
 * This class handles the aggregation of entry and location records data extracted from an array of `CulturalPropertyModel`.
 */
export class EntryAndLocationRecordsEntity {
  /**
   * Initializes a new instance of `EntryAndLocationRecordEntity`.
   *
   * @param value - Array of `CulturalPropertyModel` containing cultural properties with potential notes.
   */
  public constructor(public value: CulturalPropertyModel[]) {}

  /**
   * Factory method to create an array of `EntryAndLocationRecordsEntity`.
   *
   * Filters the input array to include only entry and location records properties that have notes and maps them to instances of `ExtendedEntryAndLocationRecordsEntity`.
   *
   * @param value - Array of `CulturalPropertyModel`.
   * @returns An array of `ExtendedEntryAndLocationRecordsEntity`.
   * @throws {TypeError} If the input is not an array.
   */
  public static create(
    value: CulturalPropertyModel[],
  ): ExtendedEntryAndLocationRecordsEntity[] {
    if (!Array.isArray(value))
      throw new TypeError(
        'Input in entry and location records is not an array',
      );

    return value
      .filter((data) => data.entryAndLocation)
      .map((data) => {
        const { uuid, entryAndLocation } = data;
        return { uuid, ...EntryAndLocationRecord.create(entryAndLocation) };
      });
  }
}
