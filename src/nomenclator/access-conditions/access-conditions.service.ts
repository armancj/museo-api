import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AccessConditionDocument,
  AccessConditionMongoModel,
  AccessConditionNameEntity,
} from './schema/access-condition.schema';
import { CreateAccessConditionDto } from './dto/create-access-condition.dto';
import { AccessConditionEntity } from './entities/access-condition.entity';
import { AccessConditionsEntity } from './entities/access-conditions.entity';

@Injectable()
export class AccessConditionsService {
  constructor(
    @InjectModel(AccessConditionNameEntity)
    private accessConditionModel: AccessConditionMongoModel,
  ) {}

  async create(
    createDto: CreateAccessConditionDto,
  ): Promise<AccessConditionEntity> {
    const created = new this.accessConditionModel(createDto);
    const result = await created.save();
    return AccessConditionEntity.create(result.toJSON());
  }

  async findAll(): Promise<AccessConditionEntity[]> {
    const results = await this.accessConditionModel
      .find({ deleted: false })
      .exec();
    return AccessConditionsEntity.create(results.map((doc) => doc.toJSON()))
      .value as AccessConditionEntity[];
  }

  async findOne(uuid: string): Promise<AccessConditionEntity> {
    const result = await this.accessConditionModel
      .findOne({ uuid, deleted: false })
      .exec();
    return result ? AccessConditionEntity.create(result.toJSON()) : null;
  }

  async update(
    uuid: string,
    updateDto: CreateAccessConditionDto,
  ): Promise<AccessConditionEntity> {
    const result = await this.accessConditionModel
      .findOneAndUpdate(
        { uuid, deleted: false },
        { ...updateDto, updatedAt: new Date() },
        { new: true },
      )
      .exec();
    return result ? AccessConditionEntity.create(result.toJSON()) : null;
  }

  async remove(uuid: string): Promise<AccessConditionEntity> {
    const result = await this.accessConditionModel
      .findOneAndUpdate(
        { uuid, deleted: false },
        { deleted: true, updatedAt: new Date() },
        { new: true },
      )
      .exec();
    return result ? AccessConditionEntity.create(result.toJSON()) : null;
  }
}
