import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DimensionsPropertiesModel } from '../models/cultural-record';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

/**
 * Mongoose schema for dimensions of a cultural object.
 *
 * Represents various physical properties related to size and weight.
 */
@Schema()
class Dimensions implements DimensionsPropertiesModel {
  /** Height of the object in centimeters (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  heightCms?: FieldMetadata<number>;

  /** Width of the object in centimeters (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  widthCms?: FieldMetadata<number>;

  /** Length of the object in centimeters (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  lengthCms?: FieldMetadata<number>;

  /** Weight of the object in kilograms */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  weightKg: FieldMetadata<number>;
}

/**
 * Schema definition for Dimensions using Mongoose.
 */
export const DimensionsSchema = SchemaFactory.createForClass(Dimensions);
