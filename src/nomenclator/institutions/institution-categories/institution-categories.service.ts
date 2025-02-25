import { Injectable } from '@nestjs/common';
import { CreateInstitutionCategoryDto } from './dto/create-institution-category.dto';
import { UpdateInstitutionCategoryDto } from './dto/update-institution-category.dto';

@Injectable()
export class InstitutionCategoriesService {
  create(createInstitutionCategoryDto: CreateInstitutionCategoryDto) {
    return 'This action adds a new institutionCategory';
  }

  findAll() {
    return `This action returns all institutionCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institutionCategory`;
  }

  update(id: number, updateInstitutionCategoryDto: UpdateInstitutionCategoryDto) {
    return `This action updates a #${id} institutionCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} institutionCategory`;
  }
}
