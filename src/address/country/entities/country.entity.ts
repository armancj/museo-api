import { Expose, plainToClass } from 'class-transformer';
import { CountryModel, CountryPropertiesModel } from './country.model';

export class Country implements CountryModel {
  @Expose()
  createdAt: Date;

  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Expose()
  name: string;

  constructor(options: CountryPropertiesModel) {
    Object.assign(this as CountryModel, options);
  }

  static create(options: CountryPropertiesModel): Country {
    return plainToClass(Country, options, { excludeExtraneousValues: true });
  }
}
