import { AccessConditionModel } from '../model/access-condition.model';
import { AccessConditionEntity } from './access-condition.entity';

export class AccessConditionsEntity {
  private constructor(public value: AccessConditionModel[]) {}

  public static create(value: AccessConditionModel[]): AccessConditionsEntity {
    if (!Array.isArray(value))
      throw new TypeError('The access conditions is not an array');
    return new AccessConditionsEntity(
      value
        .filter((data) => data)
        .map((data) => AccessConditionEntity.create(data)),
    );
  }
}
