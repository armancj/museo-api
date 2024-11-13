import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DimensionsModel } from "../models/cultural-record";

@Schema()
class Dimensions implements DimensionsModel {
  @Prop()
  heightCms?: number;

  @Prop()
  widthCms?: number;

  @Prop()
  lengthCms?: number;

  @Prop()
  squareMeters?: number;

  @Prop()
  cubicMeters?: number;
}
export const DimensionsSchema = SchemaFactory.createForClass(Dimensions);
