import { Injectable } from '@nestjs/common';
import { CreateCreationDetailDto } from './dto/create-creation-detail.dto';
import { UpdateCreationDetailDto } from './dto/update-creation-detail.dto';

@Injectable()
export class CreationDetailsService {
  create(createCreationDetailDto: CreateCreationDetailDto) {
    return 'This action adds a new creationDetail';
  }

  findAll() {
    return `This action returns all creationDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creationDetail`;
  }

  update(id: number, updateCreationDetailDto: UpdateCreationDetailDto) {
    return `This action updates a #${id} creationDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} creationDetail`;
  }
}
