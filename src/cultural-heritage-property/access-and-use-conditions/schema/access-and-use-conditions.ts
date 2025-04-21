import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccessAndUseConditionsModel } from '../models/access-and-use-conditions';
import { propTypeMongo } from '../../util/prop-type-mongo.function';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Mongoose schema for access and use conditions.
 *
 * Implements the `AccessAndUseConditionsModel` interface.
 */
@Schema()
class AccessAndUseConditions implements AccessAndUseConditionsModel {
  /** List of conditions required for accessing the resource. */
  @Prop(
    propTypeMongo({
      type: [String],
    }),
  )
  accessConditions: FieldMetadata<string[]>;

  /** List of conditions required for reproducing the resource. */
  @Prop(
    propTypeMongo({
      type: [String], // Mongoose: Arreglo de strings
    }),
  )
  reproductionConditions: FieldMetadata<string[]>;

  /** Technical requirements needed for accessing the resource. */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  technicalRequirements: FieldMetadata<string>;
}

/** Mongoose schema definition for `AccessAndUseConditions`. */
export const AccessAndUseConditionsSchema = SchemaFactory.createForClass(
  AccessAndUseConditions,
);
