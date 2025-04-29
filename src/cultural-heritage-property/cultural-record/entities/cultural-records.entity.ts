import { CulturalRecordEntity } from './cultural-record.entity';
import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedCulturalRecordEntity } from './extended-cultural-record.entity';

/**
 * Entity for a collection of cultural records.
 *
 * Represents a collection or list of cultural records.
 */
export class CulturalRecordsEntity {
  public constructor(public records: ExtendedCulturalRecordEntity[]) {}

  /**
   * Factory method to create a collection of CulturalRecordEntity instances.
   *
   * @param records - The array of cultural record data.
   * @returns A new instance of the CulturalRecordsEntity.
   */
  static create(
    records: CulturalPropertyModel[],
  ): ExtendedCulturalRecordEntity[] {
    if (!Array.isArray(records))
      throw new TypeError('Input in associatedDocumentation is not an array');

    return records
      .filter((data) => data.culturalRecord)
      .map((data) => {
        const { uuid, culturalRecord } = data;

        return {
          uuid,
          ...CulturalRecordEntity.create(culturalRecord),
        };
      });
  }
}
