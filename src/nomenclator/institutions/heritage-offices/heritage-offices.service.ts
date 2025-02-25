import { Injectable } from '@nestjs/common';
import { CreateHeritageOfficeDto } from './dto/create-heritage-office.dto';
import { UpdateHeritageOfficeDto } from './dto/update-heritage-office.dto';

@Injectable()
export class HeritageOfficesService {
  create(createHeritageOfficeDto: CreateHeritageOfficeDto) {
    return 'This action adds a new heritageOffice';
  }

  findAll() {
    return `This action returns all heritageOffices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heritageOffice`;
  }

  update(id: number, updateHeritageOfficeDto: UpdateHeritageOfficeDto) {
    return `This action updates a #${id} heritageOffice`;
  }

  remove(id: number) {
    return `This action removes a #${id} heritageOffice`;
  }
}
