import { Injectable } from '@nestjs/common';
import { CreateCulturalRecordDto } from './dto/create-cultural-record.dto';
import { UpdateCulturalRecordDto } from './dto/update-cultural-record.dto';

@Injectable()
export class CulturalRecordService {
  create(createCulturalRecordDto: CreateCulturalRecordDto) {
    return 'This action adds a new culturalRecord';
  }

  findAll() {
    return `This action returns all culturalRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} culturalRecord`;
  }

  update(id: number, updateCulturalRecordDto: UpdateCulturalRecordDto) {
    return `This action updates a #${id} culturalRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} culturalRecord`;
  }
}
