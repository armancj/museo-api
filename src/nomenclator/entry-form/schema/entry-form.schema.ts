import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { EntryForm } from '../enum/entry-form.enum';

export type EntryFormDocument = EntryFormEntity & Document;
export type EntryFormMongoModel = Model<EntryFormDocument>;

@Schema({ collection: 'entry-form' })
export class EntryFormEntity extends BaseSchema {
  @Prop({
    type: String,
    enum: EntryForm,
    required: true,
  })
  name: EntryForm;

  @Prop({ required: true })
  description: string;
}

export const EntryFormSchema = SchemaFactory.createForClass(
  EntryFormEntity,
);
EntryFormSchema.add(BaseSchemaFactory);