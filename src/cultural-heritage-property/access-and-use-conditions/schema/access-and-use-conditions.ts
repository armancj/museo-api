import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {AccessAndUseConditionsModel} from '../models/access-and-use-conditions'
@Schema()
class AccessAndUseConditions implements AccessAndUseConditionsModel{

  @Prop()
  accessConditions: string[];

  @Prop()
  reproductionConditions: string[];

  @Prop()
  technicalRequirements: string;
}
export const AccessAndUseConditionsSchema = SchemaFactory.createForClass(AccessAndUseConditions);
