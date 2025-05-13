import { BaseEntity } from '../../../common/entity/base.entity';
import { Expose, plainToClass } from 'class-transformer';

export class ConservationStatusEntity extends BaseEntity {
  @Expose()
  name: string;

  @Expose()
  description: string;

  static create(
    data: Partial<ConservationStatusEntity>,
  ): ConservationStatusEntity {
    return plainToClass(ConservationStatusEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}
