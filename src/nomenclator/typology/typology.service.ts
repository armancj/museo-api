import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTypologyDto } from './dto/create-typology.dto';
import { UpdateTypologyDto } from './dto/update-typology.dto';
import { Typology } from './entities/typology.entity';
import { Typologies } from './entities/typologies.entity';
import { TypologyDocument } from './schemas/typology.schema';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { TypologyModel } from './model/typology.model';

@Injectable()
export class TypologyService {
  constructor(
    @InjectModel(Typology.name)
    private readonly typologyRepository: Model<TypologyDocument>,
  ) {}

  async create(createTypologyDto: CreateTypologyDto): Promise<TypologyModel> {
    const createdTypology =
      await this.typologyRepository.create(createTypologyDto);
    return Typology.create(createdTypology);
  }

  async findAll(filter: {
    pagination?: PaginationDto;
  }): Promise<TypologyModel[]> {
    const { pagination } = filter;
    const { limit = 10, offset = 0 } = pagination || {};
    const typologies = await this.typologyRepository
      .find({ deleted: false })
      .skip(offset)
      .limit(limit)
      .exec();
    return Typologies.create(typologies).value;
  }

  async findOne(uuid: string): Promise<TypologyModel> {
    const typology = await this.typologyRepository
      .findOne({ uuid, deleted: false })
      .exec();
    if (!typology) throw new NotFoundException('Typology not found');
    return Typology.create(typology);
  }

  async update(uuid: string, updateTypologyDto: UpdateTypologyDto) {
    await this.findOne(uuid);
    await this.typologyRepository.updateOne({ uuid }, updateTypologyDto).exec();
    return true;
  }

  async remove(uuid: string): Promise<void> {
    const typology = await this.findOne(uuid);
    const name = `${typology.name}-${typology.uuid}`;
    await this.typologyRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}
