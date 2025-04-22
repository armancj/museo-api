import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { FundTitle } from '../enum/fund-title.enum';

export type FundTitleDocument = FundTitleEntity & Document;
export type FundTitleMongoModel = Model<FundTitleDocument>;

@Schema({ collection: 'fund-title' })
export class FundTitleEntity extends BaseSchema {
  @Prop({
    type: String,
    enum: FundTitle,
    required: true,
  })
  name: FundTitle;

  @Prop({ required: true })
  description: string;
}

export const FundTitleSchema = SchemaFactory.createForClass(FundTitleEntity);
FundTitleSchema.add(BaseSchemaFactory);
