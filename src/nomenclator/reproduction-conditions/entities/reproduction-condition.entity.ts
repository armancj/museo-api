import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReproductionCondition } from '../../common/enums/reproduction-condition.enum';

export type ReproductionConditionDocument = ReproductionConditionEntity & Document;

@Schema({ collection: 'reproduction-conditions', timestamps: true })
export class ReproductionConditionEntity {

  @Prop({ required: true, enum: ReproductionCondition })
  type: ReproductionCondition;

  @Prop()
  description?: string;
}

export const ReproductionConditionSchema = SchemaFactory.createForClass(ReproductionConditionEntity);
