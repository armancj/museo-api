import { Injectable } from '@nestjs/common';
import { CreateInstitutionTypeDto } from './dto/create-institution-type.dto';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';

@Injectable()
export class InstitutionTypesService {
  create(createInstitutionTypeDto: CreateInstitutionTypeDto) {
    return 'This action adds a new institutionType';
  }

  findAll() {
    return `This action returns all institutionTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institutionType`;
  }

  update(id: number, updateInstitutionTypeDto: UpdateInstitutionTypeDto) {
    return `This action updates a #${id} institutionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} institutionType`;
  }
}
