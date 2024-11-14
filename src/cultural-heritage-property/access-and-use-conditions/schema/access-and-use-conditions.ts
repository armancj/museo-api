import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccessAndUseConditionsModel } from '../models/access-and-use-conditions';

/**
 * Mongoose schema for access and use conditions.
 *
 * Implements the `AccessAndUseConditionsModel` interface.
 */
@Schema()
class AccessAndUseConditions implements AccessAndUseConditionsModel {

  /** List of conditions required for accessing the resource. */
  @Prop()
  accessConditions: string[];

  /** List of conditions required for reproducing the resource. */
  @Prop()
  reproductionConditions: string[];

  /** Technical requirements needed for accessing the resource. */
  @Prop()
  technicalRequirements: string;
}

/** Mongoose schema definition for `AccessAndUseConditions`. */
export const AccessAndUseConditionsSchema = SchemaFactory.createForClass(
    AccessAndUseConditions,
);
