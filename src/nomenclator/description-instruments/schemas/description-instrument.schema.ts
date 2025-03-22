import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { DescriptionInstrumentModel } from '../models/description-instrument.model';

export type DescriptionInstrumentDocument = DescriptionInstrument & Document;

@Schema()
export class DescriptionInstrument
  extends BaseSchema
  implements DescriptionInstrumentModel
{
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  active: boolean;
}

export const DescriptionInstrumentSchema = SchemaFactory.createForClass(
  DescriptionInstrument,
);

export const DescriptionInstrumentNameEntity = 'description-instrument';
DescriptionInstrumentSchema.add(BaseSchemaFactory);
