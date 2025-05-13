import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type ConservationStatusDocument = ConservationStatusEntity & Document;
export type ConservationStatusMongoModel = Model<ConservationStatusDocument>;

@Schema({ collection: 'conservation-status' })
export class ConservationStatusEntity extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const ConservationStatusSchema = SchemaFactory.createForClass(
  ConservationStatusEntity,
);
ConservationStatusSchema.add(BaseSchemaFactory);
