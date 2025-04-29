import { CategoryMuseumModel } from '../model/category-museum.model';
import { CategoryMuseum } from './category-museum.entity';

export class CategoryMuseums {
  private constructor(public value: CategoryMuseumModel[]) {}

  public static create(value: CategoryMuseumModel[]): CategoryMuseums {
    if (!Array.isArray(value))
      throw new TypeError('The category museums is not an array');
    return new CategoryMuseums(
      value.filter((data) => data).map((data) => CategoryMuseum.create(data)),
    );
  }
}
