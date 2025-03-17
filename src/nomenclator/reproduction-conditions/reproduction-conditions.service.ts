import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  ReproductionConditionDocument,
  ReproductionConditionMongoModel,
  ReproductionConditionNameEntity,
} from './schema/reproduction-condition.schema';
import { CreateReproductionConditionDto } from './dto/create-reproduction-condition.dto';
import { ReproductionConditionEntity } from './entities/reproduction-condition.entity';
import { ReproductionConditionsEntity } from './entities/reproduction-conditions.entity';

@Injectable()
export class ReproductionConditionsService {
  constructor(
    @InjectModel(ReproductionConditionNameEntity)
    private reproductionConditionModel: ReproductionConditionMongoModel,
  ) {}

  async create(createDto: CreateReproductionConditionDto): Promise<ReproductionConditionEntity> {
    const created = new this.reproductionConditionModel(createDto);
    const result = await created.save();
    return ReproductionConditionEntity.create(result.toJSON());
  }

  async findAll(): Promise<ReproductionConditionsEntity> {
    const results = await this.reproductionConditionModel.find({ deleted: false }).exec();
    return ReproductionConditionsEntity.create(results.map(doc => doc.toJSON()));
  }

  async findOne(uuid: string): Promise<ReproductionConditionEntity> {
    const result = await this.reproductionConditionModel.findOne({ uuid, deleted: false }).exec();
    return result ? ReproductionConditionEntity.create(result.toJSON()) : null;
  }

  async update(uuid: string, updateDto: CreateReproductionConditionDto): Promise<ReproductionConditionEntity> {
    const result = await this.reproductionConditionModel
      .findOneAndUpdate(
        { uuid, deleted: false },
        { ...updateDto, updatedAt: new Date() },
        { new: true }
      )
      .exec();
    return result ? ReproductionConditionEntity.create(result.toJSON()) : null;
  }

  async remove(uuid: string): Promise<ReproductionConditionEntity> {
    const result = await this.reproductionConditionModel
      .findOneAndUpdate(
        { uuid, deleted: false },
        { deleted: true, updatedAt: new Date() },
        { new: true }
      )
      .exec();
    return result ? ReproductionConditionEntity.create(result.toJSON()) : null;
  }
}
