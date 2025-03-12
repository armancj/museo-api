import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTypologyDto, UpdateTypologyDto,  } from './dto/typology.dto';
import { TypologyModel } from './model/typology.model';
import { PaginationDto } from '../../common/dto/pagination.dto';


@Injectable()
export class TypologyService {
  constructor(
    @InjectModel('Typology')
    private readonly typologyModel: Model<TypologyModel>,
  ) {}

  async create(createTypologyDto: CreateTypologyDto): Promise<TypologyModel> {
    const created = new this.typologyModel(createTypologyDto);
    return created.save();
  }

  async findAll(pagination: PaginationDto): Promise<TypologyModel[]> {
    const { limit = 10, offset = 0 } = pagination;
    return this.typologyModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(uuid: string): Promise<TypologyModel> {
    const typology = await this.typologyModel.findOne({ uuid }).exec();
    if (!typology) {
      throw new NotFoundException(`Typology with UUID ${uuid} not found`);
    }
    return typology;
  }

  async update(uuid: string, updateTypologyDto: UpdateTypologyDto): Promise<TypologyModel> {
    const updated = await this.typologyModel
      .findOneAndUpdate({ uuid }, updateTypologyDto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Typology with UUID ${uuid} not found`);
    }
    return updated;
  }

  async remove(uuid: string): Promise<void> {
    const result = await this.typologyModel.findOneAndDelete({ uuid }).exec();
    if (!result) {
      throw new NotFoundException(`Typology with UUID ${uuid} not found`);
    }
  }
}
