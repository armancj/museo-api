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
