import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ReproductionConditionModel } from '../model/reproduction-condition.model';
import { BaseSchema, BaseSchemaFactory } from '../../../common/schema/base.schema';
import { ReproductionCondition } from '../../common/enums/reproduction-condition.enum';

export type ReproductionConditionDocument = HydratedDocument<ReproductionConditionEntity>;

@Schema({})
export class ReproductionConditionEntity extends BaseSchema implements ReproductionConditionModel {
  @Prop({ required: true, enum: ReproductionCondition })
  type: ReproductionCondition;

  @Prop()
  description?: string;

  @Prop({ default: true })
  active: boolean;
}

export const ReproductionConditionSchemaFactory = SchemaFactory.createForClass(ReproductionConditionEntity);
ReproductionConditionSchemaFactory.add(BaseSchemaFactory);

export const ReproductionConditionNameEntity = 'reproduction_conditions';
export type ReproductionConditionMongoModel = Model<ReproductionConditionDocument>;