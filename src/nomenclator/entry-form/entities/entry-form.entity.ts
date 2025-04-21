import { BaseEntity } from '../../../common/entity/base.entity';
import { EntryForm } from '../enum/entry-form.enum';
import { Expose, plainToClass } from 'class-transformer';

export class EntryFormEntity extends BaseEntity {
  @Expose()
  name: EntryForm;

  @Expose()
  description: string;

  static create(data: Partial<EntryFormEntity>): EntryFormEntity {
    return plainToClass(EntryFormEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}