import { Injectable } from '@nestjs/common';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import {
  CategoryMuseumDocument,
  CategoryMuseumMongoModel,
  CategoryMuseumNameEntity,
} from './schema/category-museum.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryMuseum } from './entities/category-museum.entity';
import { CategoryMuseums } from './entities/museums.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CategoryMuseumModel } from './model/category-museum.model';
import { FilterCategoryMuseumDto } from './dto/filter-category-museum.dto';
import { RootFilterQuery } from 'mongoose';
import { InstitutionType } from '../../address/institutions/enum/institutions.enum';

@Injectable()
export class CategoryMuseumService {
  constructor(
    @InjectModel(CategoryMuseumNameEntity)
    private readonly categoryMuseumRepository: CategoryMuseumMongoModel,
  ) {}

  async create(createCategoryMuseumDto: CreateCategoryMuseumDto) {
    const createdCategoryMuseum = await this.categoryMuseumRepository.create(
      createCategoryMuseumDto,
    );
    return CategoryMuseum.create(createdCategoryMuseum);
  }

  async findAll(filter?: FilterCategoryMuseumDto) {
    const query: RootFilterQuery<CategoryMuseumDocument> = { deleted: false };

    if (filter?.active) {
      query.active = filter.active;
    }

    if (filter.name) query.name = new RegExp(filter.name, 'i');

    if (filter.institutionType) {
      const categoriesName = await this.getCategoryByInstitutionType(
        filter.institutionType,
      );
      query.$and = [{ name: categoriesName, active: true }];
    }

    const categoryMuseums = await this.categoryMuseumRepository
      .find(query)
      .exec();

    return CategoryMuseums.create(categoryMuseums).value;
  }

  async findOne(uuid: string): Promise<CategoryMuseumModel> {
    const CategoryMuseums = await this.getCategoryMuseum({
      uuid,
      deleted: false,
    });
    return CategoryMuseum.create(CategoryMuseums);
  }

  private async getCategoryMuseum(filter: Partial<CategoryMuseumModel>) {
    const categoryMuseum = await this.categoryMuseumRepository
      .findOne(filter)
      .exec();
    if (!categoryMuseum)
      throw new NotFoundException('Not found category museum');
    return categoryMuseum;
  }

  async update(uuid: string, updateCategoryMuseumDto: UpdateCategoryMuseumDto) {
    await this.findOne(uuid);
    await this.categoryMuseumRepository
      .updateOne({ uuid }, updateCategoryMuseumDto)
      .exec();
  }

  async remove(uuid: string) {
    const categoryMuseum = await this.findOne(uuid);
    const name = `${categoryMuseum.name}-${categoryMuseum.uuid}`;
    await this.categoryMuseumRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }

  async getCategoryByInstitutionType(
    institutionType: string,
  ): Promise<RootFilterQuery<CategoryMuseumDocument>> {
    const specialAndCategoryI = { $in: ['Categoría Especial', 'Categoría I'] };

    const categoryItoIII = {
      $in: ['Categoría I', 'Categoría II', 'Categoría III'],
    };

    const defaultFilter = {
      $nin: [
        'Categoría Especial',
        'Categoría I',
        'Categoría II',
        'Categoría III',
      ],
    };

    const filterMap: Map<
      InstitutionType | string,
      RootFilterQuery<CategoryMuseumDocument>
    > = new Map([
      [InstitutionType.MUSEUM, specialAndCategoryI],
      [InstitutionType.COMPLEX_MUSEUM, specialAndCategoryI],
      [InstitutionType.MUSEUM_ROOMS, categoryItoIII],
      [InstitutionType.EXT_MUSEUM, categoryItoIII],
    ]);

    return filterMap.get(institutionType) || defaultFilter;
  }
}
