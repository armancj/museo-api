import {
  MunicipalityPropertiesModel,
} from './municipality.model';
import { Municipality } from './municipality.entity';

export class Municipalities {
  private constructor(public value: Municipality[]) {}

  public static create(value: MunicipalityPropertiesModel[]): Municipalities {
    if (!Array.isArray(value))
      throw new TypeError('Municipalities is not an array');
    return new Municipalities(
      value.filter((data) => data).map((data) => Municipality.create(data)),
    );
  }
}
