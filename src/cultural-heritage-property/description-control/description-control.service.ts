import { Injectable } from '@nestjs/common';
import { CreateDescriptionControlDto } from './dto/create-description-control.dto';
import { UpdateDescriptionControlDto } from './dto/update-description-control.dto';

@Injectable()
export class DescriptionControlService {
  create(createDescriptionControlDto: CreateDescriptionControlDto) {
    return 'This action adds a new descriptionControl';
  }

  findAll() {
    return `This action returns all descriptionControl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} descriptionControl`;
  }

  update(id: number, updateDescriptionControlDto: UpdateDescriptionControlDto) {
    return `This action updates a #${id} descriptionControl`;
  }

  remove(id: number) {
    return `This action removes a #${id} descriptionControl`;
  }
}
