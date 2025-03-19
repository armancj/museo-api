import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { AccessConditionModel } from '../model/access-condition.model';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type AccessConditionDocument = HydratedDocument<AccessConditionEntity>;

@Schema({})
export class AccessConditionEntity
  extends BaseSchema
  implements AccessConditionModel
{
  @Prop({ required: true, unique: true })
  type: string;

  @Prop()
  description?: string;

  @Prop({ default: true })
  active: boolean;
}

export const AccessConditionSchemaFactory = SchemaFactory.createForClass(
  AccessConditionEntity,
);
AccessConditionSchemaFactory.add(BaseSchemaFactory);

export const AccessConditionNameEntity = 'access_conditions';
export type AccessConditionMongoModel = Model<AccessConditionDocument>;
