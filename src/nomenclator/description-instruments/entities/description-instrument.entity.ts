import { Expose, plainToClass } from 'class-transformer';
import { DescriptionInstrumentModel } from '../models/description-instrument.model';

export class DescriptionInstrumentEntity {
  @Expose()
  name: string;

  @Expose()
  active: boolean;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  constructor(options: Partial<DescriptionInstrumentModel>) {
    Object.assign(this, options);
  }

  static create(
    options: Partial<DescriptionInstrumentModel>,
  ): DescriptionInstrumentEntity {
    return plainToClass(DescriptionInstrumentEntity, options, {
      excludeExtraneousValues: true,
    });
  }
}
