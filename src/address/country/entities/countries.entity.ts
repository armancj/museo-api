import {CountryModel, CountryPropertiesModel} from './country.model';
import {Country} from "./country.entity";

export class Countries {
  private constructor(public value: CountryModel[]) {}

  public static create(value: CountryPropertiesModel[]): Countries {
    if (!Array.isArray(value)) throw new TypeError('Users is not an array');
    return new Countries(
      value.filter((data) => data).map((data) => Country.create(data)),
    );
  }
}
