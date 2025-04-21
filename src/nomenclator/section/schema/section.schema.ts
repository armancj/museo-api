import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { Section } from '../enum/section.enum';

export type SectionDocument = SectionEntity & Document;
export type SectionMongoModel = Model<SectionDocument>;

@Schema({ collection: 'section' })
export class SectionEntity extends BaseSchema {
  @Prop({
    type: String,
    enum: Section,
    required: true,
  })
  name: Section;

  @Prop({ required: true })
  description: string;
}

export const SectionSchema = SchemaFactory.createForClass(
  SectionEntity,
);
SectionSchema.add(BaseSchemaFactory);