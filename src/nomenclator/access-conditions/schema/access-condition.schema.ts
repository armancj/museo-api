import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { AccessConditionModel } from '../model/access-condition.model';
import { BaseSchema, BaseSchemaFactory } from '../../../common/schema/base.schema';
import { AccessCondition } from '../../common/enums/access-condition.enum';

export type AccessConditionDocument = HydratedDocument<AccessConditionSchema>;

@Schema({
  collection: 'access-conditions',
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class AccessConditionSchema extends BaseSchema implements AccessConditionModel {
  @Prop({ required: true, enum: AccessCondition })
  type: AccessCondition;

  @Prop()
  description?: string;
}

export const AccessConditionSchemaFactory = SchemaFactory.createForClass(AccessConditionSchema);
AccessConditionSchemaFactory.add(BaseSchemaFactory);

export const AccessConditionNameEntity = 'access_conditions';
export type AccessConditionMongoModel = Model<AccessConditionDocument>; 