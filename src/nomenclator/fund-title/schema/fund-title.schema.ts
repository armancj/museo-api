import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type FundTitleDocument = FundTitleEntity & Document;
export type FundTitleMongoModel = Model<FundTitleDocument>;

@Schema({ collection: 'fund-title' })
export class FundTitleEntity extends BaseSchema {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const FundTitleSchema = SchemaFactory.createForClass(FundTitleEntity);
FundTitleSchema.add(BaseSchemaFactory);
