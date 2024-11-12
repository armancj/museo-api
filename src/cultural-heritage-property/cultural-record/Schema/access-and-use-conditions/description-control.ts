import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class DescriptionControl {
  @Prop() descriptionMadeBy: string;
  @Prop() descriptionDateTime: Date;
  @Prop() reviewedBy: string;
  @Prop() reviewDateTime: Date;
}
export const DescriptionControlSchema = SchemaFactory.createForClass(DescriptionControl);
