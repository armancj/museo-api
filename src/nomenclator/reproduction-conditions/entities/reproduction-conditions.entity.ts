import { ReproductionConditionModel } from '../model/reproduction-condition.model';
import { ReproductionConditionEntity } from './reproduction-condition.entity';

export class ReproductionConditionsEntity {
  private constructor(public value: ReproductionConditionEntity[]) {}

  public static create(
    value: ReproductionConditionModel[],
  ): ReproductionConditionsEntity {
    if (!Array.isArray(value))
      throw new TypeError('The reproduction conditions is not an array');
    return new ReproductionConditionsEntity(
      value
        .filter((data) => data)
        .map((data) => ReproductionConditionEntity.create(data)),
    );
  }
}
