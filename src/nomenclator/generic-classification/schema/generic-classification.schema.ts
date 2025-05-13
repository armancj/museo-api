import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type GenericClassificationDocument = GenericClassificationEntity &
  Document;
export type GenericClassificationMongoModel =
  Model<GenericClassificationDocument>;

@Schema({ collection: 'generic-classification' })
export class GenericClassificationEntity extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const GenericClassificationSchema = SchemaFactory.createForClass(
  GenericClassificationEntity,
);
GenericClassificationSchema.add(BaseSchemaFactory);
