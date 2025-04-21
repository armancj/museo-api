import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDescriptionInstrumentDto } from './dto/create-description-instrument.dto';
import { UpdateDescriptionInstrumentDto } from './dto/update-description-instrument.dto';
import {
  DescriptionInstrumentDocument,
  DescriptionInstrumentNameEntity,
} from './schemas/description-instrument.schema';

import { DescriptionInstrumentEntity } from './entities/description-instrument.entity';
import { DescriptionInstruments } from './entities/description-inst.entity';

@Injectable()
export class DescriptionInstrumentsService {
  constructor(
    @InjectModel(DescriptionInstrumentNameEntity)
    private readonly descriptionInstrumentModel: Model<DescriptionInstrumentDocument>,
  ) {}

  async create(createDescriptionInstrumentDto: CreateDescriptionInstrumentDto) {
    const createdDescriptionInstrument =
      await this.descriptionInstrumentModel.create(
        createDescriptionInstrumentDto,
      );
    return DescriptionInstrumentEntity.create(createdDescriptionInstrument);
  }

  async findAll() {
    const descriptionInstruments = await this.descriptionInstrumentModel
      .find({ deleted: false })
      .exec();
    return DescriptionInstruments.create(descriptionInstruments).value;
  }

  async findOne(uuid: string) {
    const descriptionInstrument = await this.descriptionInstrumentModel
      .findOne({ uuid, deleted: false })
      .exec();
    if (!descriptionInstrument)
      throw new NotFoundException('Description Instrument not found');
    return DescriptionInstrumentEntity.create(descriptionInstrument);
  }

  async update(
    uuid: string,
    updateDescriptionInstrumentDto: UpdateDescriptionInstrumentDto,
  ): Promise<void> {
    await this.findOne(uuid);
    await this.descriptionInstrumentModel
      .updateOne({ uuid }, updateDescriptionInstrumentDto)
      .exec();
  }

  async remove(uuid: string): Promise<void> {
    const descriptionInstrument = await this.findOne(uuid);
    const name = `${descriptionInstrument.name}-${descriptionInstrument.uuid}`;
    await this.descriptionInstrumentModel
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();
  }
}
