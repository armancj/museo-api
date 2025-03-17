import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type DescriptionInstrumentDocument = DescriptionInstrument & Document;

@Schema()
export class DescriptionInstrument extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ default: false })
  deleted: boolean;
}

export const DescriptionInstrumentSchema = SchemaFactory.createForClass(
  DescriptionInstrument,
);
DescriptionInstrumentSchema.add(BaseSchemaFactory);
