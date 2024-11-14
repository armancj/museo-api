import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DimensionsPropertiesModel } from '../models/cultural-record';

@Schema()
class Dimensions implements DimensionsPropertiesModel {
  @Prop()
  heightCms?: number;

  @Prop()
  widthCms?: number;

  @Prop()
  lengthCms?: number;

  @Prop()
  weightKg: number;
}
export const DimensionsSchema = SchemaFactory.createForClass(Dimensions);
