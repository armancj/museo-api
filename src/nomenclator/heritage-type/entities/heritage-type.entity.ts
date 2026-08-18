import { BaseEntity } from '../../../common/entity/base.entity';
import { Expose, plainToClass } from 'class-transformer';

export class HeritageTypeEntity extends BaseEntity {
  @Expose()
  name: string;

  @Expose()
  description: string;

  static create(data: Partial<HeritageTypeEntity>): HeritageTypeEntity {
    return plainToClass(HeritageTypeEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}