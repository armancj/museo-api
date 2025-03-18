import { Expose, plainToClass } from 'class-transformer';
import { TypologyModel } from '../model/typology.model';

export class Typology implements TypologyModel {
  @Expose()
  name: string;

  @Expose()
  createdAt: Date;

  @Expose()
  active?: boolean;

  @Expose()
  description?: string;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  deleted: boolean;

  constructor(options: TypologyModel) {
    Object.assign(this as TypologyModel, options);
  }

  static create(options: TypologyModel): Typology {
    return plainToClass(Typology, options, {
      excludeExtraneousValues: true,
    });
  }
}
