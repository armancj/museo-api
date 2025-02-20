import { Injectable } from '@nestjs/common';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import {
  CategoryMuseumMongoModel,
  CategoryMuseumNameEntity,
} from './schema/category-museum.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryMuseum } from './entities/category-museum.entity';
import { CategoryMuseums } from './entities/museums.entity';
import { NotFoundException } from '@nestjs/common';
import { CategoryMuseumModel } from './model/category-museum.model';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from 'stream';

@Injectable()
export class CategoryMuseumService {
  constructor(
    @InjectModel(CategoryMuseumNameEntity)
    private readonly categoryMuseumRepository: CategoryMuseumMongoModel,
  ) {}

  async create(createCategoryMuseumDto: CreateCategoryMuseumDto) {
    const createdCategoryMuseum=
      await this.categoryMuseumRepository.create(createCategoryMuseumDto);
      return CategoryMuseum.create(createdCategoryMuseum);
  }

  async findAll() {
    const categoryMuseums = await this.categoryMuseumRepository
    .find({deleted:false})
    .exec();
    
    return CategoryMuseums.create(categoryMuseums).value;
  }

  async findOne(uuid: string): Promise<CategoryMuseumModel> {
    const CategoryMuseums = await this.getCategoryMuseum({ uuid, deleted: false });
    return CategoryMuseum.create(CategoryMuseums)
  }


  private async getCategoryMuseum(filter: Partial<CategoryMuseumModel>) {
    const categoryMuseum = await this.categoryMuseumRepository.findOne(filter).exec();
    if (!categoryMuseum) throw new NotFoundException('Not found category museum');
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
}
