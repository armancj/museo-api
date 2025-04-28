import { BaseEntity } from '../../../common/entity/base.entity';
import { Expose, plainToClass } from 'class-transformer';

export class SectionEntity extends BaseEntity {
  @Expose()
  name: string;

  @Expose()
  description: string;

  static create(data: Partial<SectionEntity>): SectionEntity {
    return plainToClass(SectionEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}
