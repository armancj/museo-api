import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  ReproductionConditionMongoModel,
  ReproductionConditionNameEntity,
} from './schema/reproduction-condition.schema';
import { CreateReproductionConditionDto } from './dto/create-reproduction-condition.dto';
import { ReproductionConditionEntity } from './entities/reproduction-condition.entity';
import { ReproductionConditionsEntity } from './entities/reproduction-conditions.entity';
import { UpdatedReproductionConditionDto } from './dto/updated-reproduction-condition.dto';

@Injectable()
export class ReproductionConditionsService {
  constructor(
    @InjectModel(ReproductionConditionNameEntity)
    private readonly reproductionConditionModel: ReproductionConditionMongoModel,
  ) {}

  async create(createDto: CreateReproductionConditionDto) {
    const created = new this.reproductionConditionModel(createDto);
    const result = await created.save();
    return ReproductionConditionEntity.create(result.toJSON());
  }

  async findAll() {
    const results = await this.reproductionConditionModel
      .find({ deleted: false })
      .exec();
    return ReproductionConditionsEntity.create(results).value;
  }

  async findOne(uuid: string) {
    const result = await this.reproductionConditionModel
      .findOne({ uuid, deleted: false })
      .exec();
    if (!result)
      throw new NotFoundException('Reproduction condition not found');
    return ReproductionConditionEntity.create(result);
  }

  async update(uuid: string, updateDto: UpdatedReproductionConditionDto) {
    const result = await this.reproductionConditionModel
      .updateOne({ uuid }, { ...updateDto, updatedAt: new Date() })
      .exec();

    if (result.modifiedCount === 0)
      throw new NotFoundException('Reproduction condition not updated');
    return true;
  }

  async remove(uuid: string) {
    const result = await this.reproductionConditionModel
      .updateOne(
        { uuid, deleted: false },
        { deleted: true, updatedAt: new Date() },
      )
      .exec();

    if (result.modifiedCount === 0)
      throw new NotFoundException('Reproduction condition not remove');

    return true;
  }
}
