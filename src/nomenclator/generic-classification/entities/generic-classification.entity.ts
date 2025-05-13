import { BaseEntity } from '../../../common/entity/base.entity';
import { Expose, plainToClass } from 'class-transformer';

export class GenericClassificationEntity extends BaseEntity {
  @Expose()
  name: string;

  @Expose()
  description: string;

  static create(
    data: Partial<GenericClassificationEntity>,
  ): GenericClassificationEntity {
    return plainToClass(GenericClassificationEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}
