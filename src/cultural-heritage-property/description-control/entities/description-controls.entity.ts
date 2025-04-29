import { DescriptionControlModel } from '../models/description-control-model';
import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { DescriptionControl } from './description-control.entity';
import { ExtendedDescriptionControlEntity } from './extended-description-control.entity';

/**
 * Entity for a collection of description control records.
 *
 * Represents a collection or list of description control records.
 */
export class DescriptionControlsEntity {
  public constructor(public value: ExtendedDescriptionControlEntity[]) {}

  /**
   * Factory method to create a collection of DescriptionControl instances.
   *
   * @param records - An array of description control data.
   * @returns An array of newly created DescriptionControl instances.
   */
  static create(records: CulturalPropertyModel[]): DescriptionControlModel[] {
    if (!Array.isArray(records)) {
      throw new TypeError('Input in descriptionControl is not an array');
    }

    return records
      .filter((data) => data.descriptionControl)
      .map((data) => {
        const { uuid, descriptionControl } = data;

        return {
          uuid,
          ...DescriptionControl.create(descriptionControl),
        };
      });
  }
}
