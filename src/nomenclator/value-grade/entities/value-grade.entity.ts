import { BaseEntity } from '../../../common/entity/base.entity';
import { Expose, plainToClass } from 'class-transformer';

export class ValueGradeEntity extends BaseEntity {
  @Expose()
  name: string;

  @Expose()
  description: string;

  static create(data: Partial<ValueGradeEntity>): ValueGradeEntity {
    return plainToClass(ValueGradeEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}
