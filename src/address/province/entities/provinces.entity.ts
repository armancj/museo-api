import { ProvinceModel, ProvincePropertiesModel } from './province.model';
import { Province } from './province.entity';

export class Provinces {
  private constructor(public value: ProvinceModel[]) {}

  public static create(value: ProvincePropertiesModel[]): Provinces {
    if (!Array.isArray(value)) throw new TypeError('Provinces is not an array');
    return new Provinces(
      value.filter((data) => data).map((data) => Province.create(data) as Province ),
    );
  }
}
