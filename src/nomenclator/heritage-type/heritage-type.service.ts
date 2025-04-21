import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RootFilterQuery } from 'mongoose';
import { CreateHeritageTypeDto } from './dto/create-heritage-type.dto';
import { UpdateHeritageTypeDto } from './dto/update-heritage-type.dto';
import { FilterHeritageTypeDto } from './dto/filter-heritage-type.dto';
import { HeritageTypeEntity } from './entities/heritage-type.entity';
import { HeritageTypeDocument, HeritageTypeMongoModel } from './schema/heritage-type.schema';

@Injectable()
export class HeritageTypeService {
  constructor(
    @InjectModel(HeritageTypeEntity.name)
    private readonly heritageTypeRepository: HeritageTypeMongoModel,
  ) {}

  async create(createHeritageTypeDto: CreateHeritageTypeDto) {
    const createdHeritageType = await this.heritageTypeRepository.create(
      createHeritageTypeDto,
    );
    const entity = HeritageTypeEntity.create(createdHeritageType);
    
    return {
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      uuid: entity.uuid,
      name: entity.name,
      description: entity.description
    };
  }

  async findAll(filter?: FilterHeritageTypeDto) {
    const query: RootFilterQuery<HeritageTypeDocument> = { deleted: false };

    if (filter?.name) {
      query.name = filter.name;
    }

    const heritageTypes = await this.heritageTypeRepository
      .find(query)
      .exec();

    return heritageTypes.map(heritageType => HeritageTypeEntity.create(heritageType));
  }

  async findOne(uuid: string) {
    const heritageType = await this.getHeritageType({
      uuid,
      deleted: false,
    });
    return HeritageTypeEntity.create(heritageType);
  }

  private async getHeritageType(filter: Partial<HeritageTypeEntity>) {
    const heritageType = await this.heritageTypeRepository
      .findOne(filter)
      .exec();
    if (!heritageType) {
      throw new NotFoundException('Heritage type not found');
    }
    return heritageType;
  }

  async update(uuid: string, updateHeritageTypeDto: UpdateHeritageTypeDto) {
    await this.findOne(uuid);
    await this.heritageTypeRepository
      .updateOne({ uuid }, updateHeritageTypeDto)
      .exec();
  }

  async remove(uuid: string) {
    const heritageType = await this.findOne(uuid);
    const name = `${heritageType.name}-${heritageType.uuid}`;
    await this.heritageTypeRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}