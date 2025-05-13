import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { HeritageType } from '../enum/heritage-type.enum';

export type HeritageTypeDocument = HeritageTypeEntity & Document;
export type HeritageTypeMongoModel = Model<HeritageTypeDocument>;

@Schema({ collection: 'heritage-type' })
export class HeritageTypeEntity extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const HeritageTypeSchema =
  SchemaFactory.createForClass(HeritageTypeEntity);
HeritageTypeSchema.add(BaseSchemaFactory);
