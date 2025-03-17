import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReproductionCondition } from '../../common/enums/reproduction-condition.enum';
import { ReproductionConditionModel } from '../model/reproduction-condition.model';
import { Expose, plainToClass } from 'class-transformer';

export type ReproductionConditionDocument = ReproductionConditionEntity & Document;

@Schema({ collection: 'reproduction-conditions', timestamps: true })
export class ReproductionConditionEntity implements ReproductionConditionModel {

  @Expose()
  createdAt: Date;
  
  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;

  @Prop({ required: true, enum: ReproductionCondition })
  @Expose()
  type: ReproductionCondition;

  @Prop()
  @Expose()
  description?: string;

  constructor(options: ReproductionConditionModel) {
    Object.assign(this as ReproductionConditionModel, options);
  }

  static create(options: ReproductionConditionModel): ReproductionConditionEntity {
    return plainToClass(ReproductionConditionEntity, options, {
      excludeExtraneousValues: true,
    });
  }
}

export const ReproductionConditionSchema = SchemaFactory.createForClass(ReproductionConditionEntity);
