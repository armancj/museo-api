import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DescriptionControlModel } from '../models/description-control-model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

@Schema()
class DescriptionControl implements DescriptionControlModel {
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  descriptionMadeBy: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: Date,
    }),
  )
  descriptionDateTime: FieldMetadata<Date>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  reviewedBy: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: Date,
    }),
  )
  reviewDateTime: FieldMetadata<Date>;
}
export const DescriptionControlSchema =
  SchemaFactory.createForClass(DescriptionControl);
