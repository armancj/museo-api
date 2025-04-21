import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {DimensionsModel} from "../models/cultural-record";

/**
 * Mongoose schema for dimensions of a cultural object.
 *
 * Represents various physical properties related to size and weight.
 */
@Schema()
class Dimensions implements DimensionsModel {
  /** Height of the object in centimeters (optional) */
  @Prop()
  heightCms?: number;

  /** Width of the object in centimeters (optional) */
  @Prop()
  widthCms?: number;

  /** Length of the object in centimeters (optional) */
  @Prop()
  lengthCms?: number;

  /** Weight of the object in kilograms */
  @Prop()
  weightKg: number;
}

/**
 * Schema definition for Dimensions using Mongoose.
 */
export const DimensionsSchema = SchemaFactory.createForClass(Dimensions);
