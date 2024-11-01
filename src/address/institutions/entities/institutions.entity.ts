import {
  InstitutionModel,
  InstitutionPropertiesModel,
} from './institution.model';
import { Institution } from './institution.entity';

export class Institutions {
  private constructor(public value: InstitutionModel[]) {}

  public static create(value: InstitutionPropertiesModel[]): Institutions {
    if (!Array.isArray(value)) throw new TypeError('Users is not an array');
    return new Institutions(
      value.filter((data) => data).map((data) => Institution.create(data)),
    );
  }
}
