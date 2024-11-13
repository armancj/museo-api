import { Injectable } from '@nestjs/common';
import { CreateProducerAuthorRecordDto } from './dto/create-producer-author-record.dto';
import { UpdateProducerAuthorRecordDto } from './dto/update-producer-author-record.dto';

@Injectable()
export class ProducerAuthorRecordService {
  create(
    uuid: string,
    createProducerAuthorRecordDto: CreateProducerAuthorRecordDto,
  ) {
    return 'This action adds a new producerAuthorRecord';
  }

  findAll() {
    return `This action returns all producerAuthorRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producerAuthorRecord`;
  }

  update(
    id: number,
    updateProducerAuthorRecordDto: UpdateProducerAuthorRecordDto,
  ) {
    return `This action updates a #${id} producerAuthorRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} producerAuthorRecord`;
  }
}
