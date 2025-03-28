import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import { CreateProducerAuthorRecordDto } from './dto/create-producer-author-record.dto';
import { ProducerAuthorRecord } from './entities/producer-author-record.entity';
import { ProducerAuthorRecordModel } from './models/producer-author-record.models';
import { ProducerAuthorRecords } from './entities/producer-author-records.entity';
import { User } from '../../users/entities/user.entity';
import {CommonRecordService} from "../shared/common-record-service.service";

@Injectable()
export class ProducerAuthorRecordService {
    constructor(
        @Inject('PRODUCER_AUTHOR_RECORD_SERVICE')
        private readonly producerAuthorModel: CommonRecordService<
            any,
            CreateProducerAuthorRecordDto,
            ProducerAuthorRecord,
            ProducerAuthorRecords
        >,
    ) {
    }

    async create(uuid: string, producerAuthor: CreateProducerAuthorRecordDto, user: User) {
    return await this.producerAuthorModel.create(
        uuid,
        producerAuthor,
        user
    );
  }

  async findAll() {
      return this.producerAuthorModel.findAll();
  }

  async findOne(uuid: string) {
      return this.producerAuthorModel.findOne(uuid);
  }

  async update(
    uuid: string,
    producerAuthor: Partial<ProducerAuthorRecordModel>,
  ) {
      return this.producerAuthorModel.update(
          uuid,
          producerAuthor,
      );
  }

  async remove(uuid: string) {
      return this.producerAuthorModel.remove(uuid);
  }
}
