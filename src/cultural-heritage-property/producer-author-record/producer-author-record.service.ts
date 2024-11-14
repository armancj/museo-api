import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProducerAuthorRecordDto } from './dto/create-producer-author-record.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertyModel,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { ProducerAuthorRecord } from './entities/producer-author-record.entity';
import { ProducerAuthorRecordModel } from './models/producer-author-record.models';
import { ProducerAuthorRecords } from './entities/producer-author-records.entity';

@Injectable()
export class ProducerAuthorRecordService {
  constructor(
    @InjectModel(CulturalHeritagePropertyEntity)
    private readonly producerAuthorModel: CulturalHeritagePropertyModel,
  ) {}
  async create(uuid: string, producerAuthor: CreateProducerAuthorRecordDto) {
    return await this.updatedDataMongo(uuid, producerAuthor);
  }

  async findAll() {
    const culturalProperty = await this.producerAuthorModel
      .find({ deleted: false })
      .lean()
      .exec();
    return ProducerAuthorRecords.create(culturalProperty);
  }

  async findOne(uuid: string) {
    const culturalProperty = await this.producerAuthorModel
      .findOne({
        uuid,
        deleted: false,
      })
      .lean()
      .exec();

    if (!culturalProperty)
      throw new NotFoundException('Not Found cultural Property');

    if (!culturalProperty?.producerAuthor)
      throw new NotFoundException('Not Found producer Author');

    return ProducerAuthorRecord.create(culturalProperty.producerAuthor);
  }

  async update(
    uuid: string,
    producerAuthor: Partial<ProducerAuthorRecordModel>,
  ) {
    await this.findOne(uuid);
    return await this.updatedDataMongo(uuid, producerAuthor);
  }

  async remove(uuid: string) {
    await this.findOne(uuid);
    await this.producerAuthorModel.updateOne(
        { uuid },
        { $unset: { producerAuthor: "" } },
    );
  }

  private async updatedDataMongo(uuid: string, producerAuthor: Partial<ProducerAuthorRecordModel>) {
    const culturalProperty = await this.producerAuthorModel
        .findOneAndUpdate(
            {uuid, deleted: false},
            {producerAuthor},
            {new: true},
        )
        .lean()
        .exec();

    if (!culturalProperty)
      throw new NotFoundException('Not Found cultural Property');

    return ProducerAuthorRecord.create(culturalProperty.producerAuthor);
  }
}
