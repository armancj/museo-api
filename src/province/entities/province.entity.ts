import { ProvinceModel, ProvincePropertiesModel } from './province.model';
import { Expose, plainToClass } from 'class-transformer';

export class Province implements ProvinceModel {
  @Expose()
  createdAt: Date;

  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Expose()
  country: string;

  @Expose()
  name: string;

  constructor(options: ProvincePropertiesModel) {
    Object.assign(this as ProvinceModel, options);
  }

  static create(options: ProvincePropertiesModel): Province {
    return plainToClass(Province, options, { excludeExtraneousValues: true });
  }
}
