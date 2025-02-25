import { Injectable } from '@nestjs/common';
import { CreateDescriptionUnitDto } from './dto/create-description-unit.dto';
import { UpdateDescriptionUnitDto } from './dto/update-description-unit.dto';

@Injectable()
export class DescriptionUnitsService {
  create(createDescriptionUnitDto: CreateDescriptionUnitDto) {
    return 'This action adds a new descriptionUnit';
  }

  findAll() {
    return `This action returns all descriptionUnits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} descriptionUnit`;
  }

  update(id: number, updateDescriptionUnitDto: UpdateDescriptionUnitDto) {
    return `This action updates a #${id} descriptionUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} descriptionUnit`;
  }
}
