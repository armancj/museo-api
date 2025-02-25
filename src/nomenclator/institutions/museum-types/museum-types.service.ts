import { Injectable } from '@nestjs/common';
import { CreateMuseumTypeDto } from './dto/create-museum-type.dto';
import { UpdateMuseumTypeDto } from './dto/update-museum-type.dto';

@Injectable()
export class MuseumTypesService {
  create(createMuseumTypeDto: CreateMuseumTypeDto) {
    return 'This action adds a new museumType';
  }

  findAll() {
    return `This action returns all museumTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} museumType`;
  }

  update(id: number, updateMuseumTypeDto: UpdateMuseumTypeDto) {
    return `This action updates a #${id} museumType`;
  }

  remove(id: number) {
    return `This action removes a #${id} museumType`;
  }
}
