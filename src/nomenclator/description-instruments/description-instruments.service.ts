import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDescriptionInstrumentDto } from './dto/create-description-instrument.dto';
import { UpdateDescriptionInstrumentDto } from './dto/update-description-instrument.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DescriptionInstrument, DescriptionInstrumentDocument } from './schemas/description-instrument.schema';
import { BaseSchema } from '../../common/schema/base.schema';

@Injectable()
export class DescriptionInstrumentsService {
  constructor(
    @InjectModel(DescriptionInstrument.name) private descriptionInstrumentModel: Model<DescriptionInstrumentDocument>,
  ) { }

  async create(createDescriptionInstrumentDto: CreateDescriptionInstrumentDto): Promise<DescriptionInstrument> {
    const createdDescriptionInstrument = new this.descriptionInstrumentModel(createDescriptionInstrumentDto);
    return createdDescriptionInstrument.save();
  }

  async findAll(): Promise<DescriptionInstrument[]> {
    return this.descriptionInstrumentModel.find().exec();
  }

  async findOne(id: string): Promise<DescriptionInstrument> {
    const descriptionInstrument = await this.descriptionInstrumentModel.findById(id).exec();
    if (!descriptionInstrument) {
      throw new NotFoundException(`DescriptionInstrument with ID ${id} not found`);
    }
    return descriptionInstrument;
  }

  async update(id: string, updateDescriptionInstrumentDto: UpdateDescriptionInstrumentDto): Promise<DescriptionInstrument> {
    const existingDescriptionInstrument = await this.descriptionInstrumentModel.findByIdAndUpdate(id, updateDescriptionInstrumentDto, { new: true }).exec();
    if (!existingDescriptionInstrument) {
      throw new NotFoundException(`DescriptionInstrument with ID ${id} not found`);
    }
    return existingDescriptionInstrument;
  }

  async remove(id: string): Promise<DescriptionInstrument> {
    const descriptionInstrument = await this.descriptionInstrumentModel.findByIdAndDelete(id).exec();
    if (!descriptionInstrument) {
      throw new NotFoundException(`DescriptionInstrument with ID ${id} not found`);
    }
    return descriptionInstrument;
  }
}
