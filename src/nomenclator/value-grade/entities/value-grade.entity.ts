import { BaseEntity } from '../../../common/entity/base.entity';
import { ValueGrade } from '../enum/value-grade.enum';
import { Expose, plainToClass } from 'class-transformer';

export class ValueGradeEntity extends BaseEntity {
  @Expose()
  name: ValueGrade;

  @Expose()
  description: string;

  static create(data: Partial<ValueGradeEntity>): ValueGradeEntity {
    return plainToClass(ValueGradeEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}