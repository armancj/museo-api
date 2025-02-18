import { CategoryMuseumModel } from '../model/category-museum.model';
import { Expose, plainToClass } from 'class-transformer';

export class CategoryMuseum implements CategoryMuseumModel {
  @Expose()
  createdAt: Date;

  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Expose()
  name: string;

  constructor(options: CategoryMuseumModel) {
    Object.assign(this as CategoryMuseumModel, options);
  }

  static create(options: CategoryMuseumModel): CategoryMuseum {
    return plainToClass(CategoryMuseum, options, {
      excludeExtraneousValues: true,
    });
  }
}
