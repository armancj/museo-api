import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { DescriptionControlModel } from "../models/access-and-use-conditions";

@Schema()
class DescriptionControl implements DescriptionControlModel{

  @Prop()
  descriptionMadeBy: string;

  @Prop()
  descriptionDateTime: Date;

  @Prop()
  reviewedBy: string;

  @Prop()
  reviewDateTime: Date;
}
export const DescriptionControlSchema = SchemaFactory.createForClass(DescriptionControl);
