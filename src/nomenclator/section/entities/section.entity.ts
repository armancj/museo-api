import { BaseEntity } from '../../../common/entity/base.entity';
import { Section } from '../enum/section.enum';
import { Expose, plainToClass } from 'class-transformer';

export class SectionEntity extends BaseEntity {
  @Expose()
  name: Section;

  @Expose()
  description: string;

  static create(data: Partial<SectionEntity>): SectionEntity {
    return plainToClass(SectionEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}