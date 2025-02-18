import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import { CategoryMuseumMongoModel, CategoryMuseumNameEntity } from "./schema/category-museum.schema";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryMuseumService {
  constructor(
    @InjectModel(CategoryMuseumNameEntity)
    private readonly categoryMuseumRepository: CategoryMuseumMongoModel,
  ) {}

  create(createCategoryMuseumDto: CreateCategoryMuseumDto) {
    return 'This action adds a new categoryMuseum';
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
