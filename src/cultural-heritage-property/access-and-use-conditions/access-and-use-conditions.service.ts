import { Injectable } from '@nestjs/common';
import { CreateAccessAndUseConditionDto } from './dto/create-access-and-use-condition.dto';
import { UpdateAccessAndUseConditionDto } from './dto/update-access-and-use-condition.dto';

@Injectable()
export class AccessAndUseConditionsService {
  create(createAccessAndUseConditionDto: CreateAccessAndUseConditionDto) {
    return 'This action adds a new accessAndUseCondition';
  }

  findAll() {
    return `This action returns all accessAndUseConditions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessAndUseCondition`;
  }

  update(id: number, updateAccessAndUseConditionDto: UpdateAccessAndUseConditionDto) {
    return `This action updates a #${id} accessAndUseCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessAndUseCondition`;
  }
}
