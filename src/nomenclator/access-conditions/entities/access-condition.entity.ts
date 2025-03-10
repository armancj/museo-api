import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AccessCondition } from '../../common/enums/access-condition.enum';

export type AccessConditionDocument = AccessConditionEntity & Document;

@Schema({ collection: 'access-conditions', timestamps: true })
export class AccessConditionEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: AccessCondition })
  type: AccessCondition;

  @Prop()
  description?: string;
}

export const AccessConditionSchema = SchemaFactory.createForClass(AccessConditionEntity);
