import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateConservationStatusDto } from './dto/create-conservation-status.dto';
import { UpdateConservationStatusDto } from './dto/update-conservation-status.dto';
import { FilterConservationStatusDto } from './dto/filter-conservation-status.dto';
import { ConservationStatusEntity } from './entities/conservation-status.entity';
import {
  ConservationStatusDocument,
  ConservationStatusMongoModel,
} from './schema/conservation-status.schema';

@Injectable()
export class ConservationStatusService {
  constructor(
    @InjectModel(ConservationStatusEntity.name)
    private readonly conservationStatusRepository: ConservationStatusMongoModel,
  ) {}

  async create(createConservationStatusDto: CreateConservationStatusDto) {
    const createdStatus = await this.conservationStatusRepository.create(
      createConservationStatusDto,
    );
    const entity = ConservationStatusEntity.create(createdStatus);

    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description,
    };
  }

  async findAll(filter?: FilterConservationStatusDto) {
    const query: RootFilterQuery<ConservationStatusDocument> = {
      deleted: false,
    };

    if (filter?.name) {
      query.name = filter.name;
    }

    const statuses = await this.conservationStatusRepository.find(query).exec();

    return statuses.map((status) => ConservationStatusEntity.create(status));
  }

  async findOne(uuid: string) {
    const status = await this.getConservationStatus({
      uuid,
      deleted: false,
    });
    return ConservationStatusEntity.create(status);
  }

  private async getConservationStatus(
    filter: Partial<ConservationStatusEntity>,
  ) {
    const status = await this.conservationStatusRepository
      .findOne(filter)
      .exec();
    if (!status) {
      throw new NotFoundException('Conservation status not found');
    }
    return status;
  }

  async update(
    uuid: string,
    updateConservationStatusDto: UpdateConservationStatusDto,
  ) {
    await this.findOne(uuid);
    await this.conservationStatusRepository
      .updateOne({ uuid }, updateConservationStatusDto)
      .exec();
  }

  async remove(uuid: string) {
    const status = await this.findOne(uuid);
    const name = `${status.name}-${status.uuid}`;
    await this.conservationStatusRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}
