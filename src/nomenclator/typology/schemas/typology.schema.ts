import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type TypologyDocument = Typology & Document;

@Schema()
export class Typology extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  active: boolean;
}

export const TypologySchema = SchemaFactory.createForClass(Typology);
TypologySchema.add(BaseSchemaFactory);

export const TypologyNameEntity = Typology.name;
