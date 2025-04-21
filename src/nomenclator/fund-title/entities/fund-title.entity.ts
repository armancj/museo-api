import { BaseEntity } from '../../../common/entity/base.entity';
import { FundTitle } from '../enum/fund-title.enum';
import { Expose, plainToClass } from 'class-transformer';

export class FundTitleEntity extends BaseEntity {
  @Expose()
  name: FundTitle;

  @Expose()
  description: string;

  static create(data: Partial<FundTitleEntity>): FundTitleEntity {
    return plainToClass(FundTitleEntity, data, {
      excludeExtraneousValues: true,
    });
  }
}