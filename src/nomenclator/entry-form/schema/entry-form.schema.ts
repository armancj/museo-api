import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type EntryFormDocument = EntryFormEntity & Document;
export type EntryFormMongoModel = Model<EntryFormDocument>;

@Schema({ collection: 'entry-form' })
export class EntryFormEntity extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const EntryFormSchema = SchemaFactory.createForClass(EntryFormEntity);
EntryFormSchema.add(BaseSchemaFactory);
