import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class Dimensions {
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
