import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import {ExtendedAccessAndUseConditionEntity} from "./extended-access-and-use-condition.entity";
import {AccessAndUseCondition} from "./access-and-use-condition.entity";


export class AccessAndUseConditionsEntity {
  public constructor(public value: CulturalPropertyModel[]) {}

  public static create(
    value: CulturalPropertyModel[],
  ): ExtendedAccessAndUseConditionEntity [] {
    if (!Array.isArray(value))
      throw new TypeError('Input in producer author is not an array');

    return value
        .filter((data) => data.accessAndUseConditions)
        .map((data) => {
          const {uuid, accessAndUseConditions} = data;
          return {uuid, ...AccessAndUseCondition.create(accessAndUseConditions)};
        });
  }
}
