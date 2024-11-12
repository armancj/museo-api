import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class VolumeQuantities {
  @Prop() file?: number;
  @Prop() pages?: number;
  @Prop() books?: number;
  @Prop() objects?: number;
  @Prop() photos?: number;
  @Prop() engravings?: number;
  @Prop() slides?: number;
  @Prop() negatives?: number;
  @Prop() mapsPlansSketches?: number;
}
export const VolumeQuantitiesSchema = SchemaFactory.createForClass(VolumeQuantities);
