import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccessConditionEntity, AccessConditionDocument } from './entities/access-condition.entity';
import { CreateAccessConditionDto } from './dto/create-access-condition.dto';

@Injectable()
export class AccessConditionsService {
  constructor(
    @InjectModel(AccessConditionEntity.name)
    private accessConditionModel: Model<AccessConditionDocument>,
  ) {}

  async create(createDto: CreateAccessConditionDto): Promise<AccessConditionDocument> {
    const created = new this.accessConditionModel(createDto);
    return created.save();
  }

  async findAll(): Promise<AccessConditionDocument[]> {
    return this.accessConditionModel.find().exec();
  }

  async findOne(id: string): Promise<AccessConditionDocument> {
    return this.accessConditionModel.findById(id).exec();
  }

  async update(id: string, updateDto: CreateAccessConditionDto): Promise<AccessConditionDocument> {
    return this.accessConditionModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<AccessConditionDocument> {
    return this.accessConditionModel.findByIdAndDelete(id).exec();
  }
}
