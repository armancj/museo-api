import { Injectable } from '@nestjs/common';
import { CreateSubordinationDto } from './dto/create-subordination.dto';
import { UpdateSubordinationDto } from './dto/update-subordination.dto';

@Injectable()
export class SubordinationService {
  create(createSubordinationDto: CreateSubordinationDto) {
    return 'This action adds a new subordination';
  }

  findAll() {
    return `This action returns all subordination`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subordination`;
  }

  update(id: number, updateSubordinationDto: UpdateSubordinationDto) {
    return `This action updates a #${id} subordination`;
  }

  remove(id: number) {
    return `This action removes a #${id} subordination`;
  }
}
