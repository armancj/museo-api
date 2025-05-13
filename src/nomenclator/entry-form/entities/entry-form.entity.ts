import { BaseEntity } from '../../../common/entity/base.entity';
import { Expose, plainToClass } from 'class-transformer';

export class EntryFormEntity extends BaseEntity {
  @Expose()
  name: string;

  @Expose()
  description: string;

  static create(data: Partial<EntryFormEntity>): EntryFormEntity {
    return plainToClass(EntryFormEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}
