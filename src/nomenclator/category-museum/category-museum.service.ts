import { Injectable } from '@nestjs/common';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import {
  CategoryMuseumMongoModel,
  CategoryMuseumNameEntity,
} from './schema/category-museum.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryMuseum } from './entities/category-museum.entity';

@Injectable()
export class CategoryMuseumService {
  constructor(
    @InjectModel(CategoryMuseumNameEntity)
    private readonly categoryMuseumRepository: CategoryMuseumMongoModel,
  ) {}

  async create(createCategoryMuseumDto: CreateCategoryMuseumDto) {
    const createdMuseum=
      await this.categoryMuseumRepository.create(createCategoryMuseumDto);
      return CategoryMuseum.create(createdMuseum);
  }

  findAll() {
    return this.categoryMuseumRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryMuseum`;
  }

  update(id: number, updateCategoryMuseumDto: UpdateCategoryMuseumDto) {
    return `This action updates a #${id} categoryMuseum`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryMuseum`;
  }
}
