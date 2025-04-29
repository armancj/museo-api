import { ReproductionConditionModel } from '../model/reproduction-condition.model';
import { Expose, plainToClass } from 'class-transformer';

export class ReproductionConditionEntity implements ReproductionConditionModel {
  @Expose()
  createdAt: Date;

  @Expose()
  active: boolean;

  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Expose()
  name: string;

  @Expose()
  description?: string;

  constructor(options: ReproductionConditionModel) {
    Object.assign(this as ReproductionConditionModel, options);
  }

  static create(
    options: ReproductionConditionModel,
  ): ReproductionConditionEntity {
    return plainToClass(ReproductionConditionEntity, options, {
      excludeExtraneousValues: true,
    });
  }
}

