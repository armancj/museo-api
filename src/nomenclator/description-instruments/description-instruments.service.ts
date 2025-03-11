import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDescriptionInstrumentDto } from './dto/create-description-instrument.dto';
import { UpdateDescriptionInstrumentDto } from './dto/update-description-instrument.dto';
import { DescriptionInstrument, DescriptionInstrumentDocument } from './schemas/description-instrument.schema';


@Injectable()
export class DescriptionInstrumentsService {
  constructor(
    @InjectModel(DescriptionInstrument.name) private readonly descriptionInstrumentModel: Model<DescriptionInstrumentDocument>,
  ) { }

  async create(createDescriptionInstrumentDto: CreateDescriptionInstrumentDto): Promise<DescriptionInstrument> {
    const createdDescriptionInstrument = new this.descriptionInstrumentModel(createDescriptionInstrumentDto);
    return createdDescriptionInstrument.save();
  }

  async findAll(): Promise<DescriptionInstrument[]> {
    const descriptionInstruments = await this.descriptionInstrumentModel.find({ deleted: false }).exec();
    return descriptionInstruments;
  }

  async findOne(uuid: string): Promise<DescriptionInstrument> {
    const descriptionInstrument = await this.descriptionInstrumentModel.findOne({ uuid, deleted: false }).exec();
    if (!descriptionInstrument) throw new NotFoundException('Description Instrument not found');
    return descriptionInstrument;
  }

  async update(uuid: string, updateDescriptionInstrumentDto: UpdateDescriptionInstrumentDto): Promise<void> {
    await this.findOne(uuid);
    await this.descriptionInstrumentModel.updateOne({ uuid }, updateDescriptionInstrumentDto).exec();
  }

  async remove(uuid: string): Promise<void> {
    const descriptionInstrument = await this.findOne(uuid);
    const name = `${descriptionInstrument.name}-${descriptionInstrument.uuid}`;
    await this.descriptionInstrumentModel.updateOne({ uuid, deleted: false }, { deleted: true, name }).exec();
  }
}
