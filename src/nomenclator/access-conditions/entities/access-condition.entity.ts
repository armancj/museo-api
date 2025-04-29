import { AccessConditionModel } from '../model/access-condition.model';
import { Expose, plainToClass } from 'class-transformer';

export class AccessConditionEntity implements AccessConditionModel {
  @Expose()
  createdAt: Date;

  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Expose()
  type: string;

  @Expose()
  description: string;

  constructor(options: AccessConditionModel) {
    Object.assign(this as AccessConditionModel, options);
  }

  static create(options: AccessConditionModel): AccessConditionEntity {
    return plainToClass(AccessConditionEntity, options, {
      excludeExtraneousValues: true,
    });
  }
}
