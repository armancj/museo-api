import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DescriptionInstrumentDocument = DescriptionInstrument & Document;

@Schema()
export class DescriptionInstrument {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  active: boolean;
}

export const DescriptionInstrumentSchema = SchemaFactory.createForClass(DescriptionInstrument);