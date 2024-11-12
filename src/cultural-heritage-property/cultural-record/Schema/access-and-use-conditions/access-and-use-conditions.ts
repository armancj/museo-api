import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class AccessAndUseConditions implements AccessAndUseConditions{

  @Prop()
  accessConditions: string[];

  @Prop()
  reproductionConditions: string[];

  @Prop()
  technicalRequirements: string;
}
export const AccessAndUseConditionsSchema = SchemaFactory.createForClass(AccessAndUseConditions);
