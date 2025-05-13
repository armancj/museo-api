import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedAccessAndUseConditionEntity } from './extended-access-and-use-condition.entity';
import { AccessAndUseCondition } from './access-and-use-condition.entity';

/**
 * Entity representing the conditions of access and use for cultural properties.
 */
export class AccessAndUseConditionsEntity {
  /**
   * Constructor for `AccessAndUseConditionsEntity`.
   *
   * @param value - Array of `CulturalPropertyModel` instances containing cultural properties data.
   */
  public constructor(public value: AccessAndUseCondition[]) {}

  /**
   * Factory method to create an array of `ExtendedAccessAndUseConditionEntity`.
   *
   * Filters the input array of `CulturalPropertyModel`, retaining only the elements
   * with access and use conditions, and maps each to an extended access and use condition entity.
   *
   * @param value - Array of `CulturalPropertyModel`.
   * @returns Array of `ExtendedAccessAndUseConditionEntity`.
   * @throws {TypeError} If the input is not an array.
   */
  public static create(
    value: CulturalPropertyModel[],
  ): ExtendedAccessAndUseConditionEntity[] {
    if (!Array.isArray(value)) {
      throw new TypeError('Input in producer author is not an array');
    }

    return value
      .filter((data) => data.accessAndUseConditions)
      .map((data) => {
        const { uuid, accessAndUseConditions } = data;
        return {
          uuid,
          ...AccessAndUseCondition.create(accessAndUseConditions),
        };
      });
  }
}
