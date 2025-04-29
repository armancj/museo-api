import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateGenericClassificationDto } from './dto/create-generic-classification.dto';
import { UpdateGenericClassificationDto } from './dto/update-generic-classification.dto';
import { FilterGenericClassificationDto } from './dto/filter-generic-classification.dto';
import { GenericClassificationEntity } from './entities/generic-classification.entity';
import {
  GenericClassificationDocument,
  GenericClassificationMongoModel,
} from './schema/generic-classification.schema';

@Injectable()
export class GenericClassificationService {
  constructor(
    @InjectModel(GenericClassificationEntity.name)
    private readonly genericClassificationRepository: GenericClassificationMongoModel,
  ) {}

  async create(createGenericClassificationDto: CreateGenericClassificationDto) {
    const createdClassification =
      await this.genericClassificationRepository.create(
        createGenericClassificationDto,
      );
    const entity = GenericClassificationEntity.create(createdClassification);

    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description,
    };
  }

  async findAll(filter?: FilterGenericClassificationDto) {
    const query: RootFilterQuery<GenericClassificationDocument> = {
      deleted: false,
    };

    if (filter?.name) {
      query.name = filter.name;
    }

    const classifications = await this.genericClassificationRepository
      .find(query)
      .exec();

    return classifications.map((classification) =>
      GenericClassificationEntity.create(classification),
    );
  }

  async findOne(uuid: string) {
    const classification = await this.getGenericClassification({
      uuid,
      deleted: false,
    });
    return GenericClassificationEntity.create(classification);
  }

  private async getGenericClassification(
    filter: Partial<GenericClassificationEntity>,
  ) {
    const classification = await this.genericClassificationRepository
      .findOne(filter)
      .exec();
    if (!classification) {
      throw new NotFoundException('Generic classification not found');
    }
    return classification;
  }

  async update(
    uuid: string,
    updateGenericClassificationDto: UpdateGenericClassificationDto,
  ) {
    await this.findOne(uuid);
    await this.genericClassificationRepository
      .updateOne({ uuid }, updateGenericClassificationDto)
      .exec();
  }

  async remove(uuid: string) {
    const classification = await this.findOne(uuid);
    const name = `${classification.name}-${classification.uuid}`;
    await this.genericClassificationRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}
