import { TypologyModel } from '../model/typology.model';
import { Typology } from './typology.entity';

export class Typologies {
  private constructor(public value: TypologyModel[]) {}

  public static create(value: TypologyModel[]): Typologies {
    if (!Array.isArray(value))
      throw new TypeError('The typologies is not an array');
    return new Typologies(
      value.filter((data) => data).map((data) => Typology.create(data)),
    );
  }
}
