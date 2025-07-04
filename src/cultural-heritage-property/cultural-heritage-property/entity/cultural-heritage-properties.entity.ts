import { CulturalPropertyModel } from '../models/cultural-property.model';
import { CulturalHeritageProperty } from './cultural-heritage-property.entity';

export class CulturalHeritagePropertiesEntity {
  private constructor(public value: CulturalHeritageProperty[]) {}

  static create(value: CulturalPropertyModel[]): CulturalHeritageProperty[] {
    if (!Array.isArray(value)) throw new TypeError('Input in Cultural Property is not an array');

    return value.filter(data => data).map(data => CulturalHeritageProperty.create(data));
  }
}
