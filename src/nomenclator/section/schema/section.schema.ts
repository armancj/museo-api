import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type SectionDocument = SectionEntity & Document;
export type SectionMongoModel = Model<SectionDocument>;

@Schema({ collection: 'section' })
export class SectionEntity extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const SectionSchema = SchemaFactory.createForClass(SectionEntity);
SectionSchema.add(BaseSchemaFactory);
