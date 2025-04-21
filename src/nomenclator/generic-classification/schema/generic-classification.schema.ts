import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { GenericClassification } from '../enum/generic-classification.enum';

export type GenericClassificationDocument = GenericClassificationEntity & Document;
export type GenericClassificationMongoModel = Model<GenericClassificationDocument>;

@Schema({ collection: 'generic-classification' })
export class GenericClassificationEntity extends BaseSchema {
  @Prop({
    type: String,
    enum: GenericClassification,
    required: true,
  })
  name: GenericClassification;

  @Prop({ required: true })
  description: string;
}

export const GenericClassificationSchema = SchemaFactory.createForClass(
  GenericClassificationEntity,
);
GenericClassificationSchema.add(BaseSchemaFactory);