import { Expose, plainToClass } from 'class-transformer';

export class DescriptionInstrument {
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

  constructor(options: Partial<DescriptionInstrument>) {
    Object.assign(this, options);
  }

  static create(options: Partial<DescriptionInstrument>): DescriptionInstrument {
    return plainToClass(DescriptionInstrument, options, {
      excludeExtraneousValues: true,
    });
  }
}
