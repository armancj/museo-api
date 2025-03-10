import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReproductionConditionEntity, ReproductionConditionDocument } from './entities/reproduction-condition.entity';
import { CreateReproductionConditionDto } from './dto/create-reproduction-condition.dto';

@Injectable()
export class ReproductionConditionsService {
  constructor(
    @InjectModel(ReproductionConditionEntity.name)
    private reproductionConditionModel: Model<ReproductionConditionDocument>,
  ) {}

  async create(createDto: CreateReproductionConditionDto): Promise<ReproductionConditionDocument> {
    const created = new this.reproductionConditionModel(createDto);
    return created.save();
  }

  async findAll(): Promise<ReproductionConditionDocument[]> {
    return this.reproductionConditionModel.find().exec();
  }

  async findOne(id: string): Promise<ReproductionConditionDocument> {
    return this.reproductionConditionModel.findById(id).exec();
  }

  async update(id: string, updateDto: CreateReproductionConditionDto): Promise<ReproductionConditionDocument> {
    return this.reproductionConditionModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<ReproductionConditionDocument> {
    return this.reproductionConditionModel.findByIdAndDelete(id).exec();
  }
}
