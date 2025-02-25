import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VolumeQuantitiesModel } from '../models/cultural-record';

/**
 * Mongoose schema for representing volume quantities.
 *
 * This schema captures different types of volumes related to cultural records,
 * such as files, pages, books, and other media.
 */
@Schema()
class VolumeQuantities implements VolumeQuantitiesModel {
  /** Number of files (optional) */
  @Prop()
  file?: number;

  /** Number of pages (optional) */
  @Prop()
  pages?: number;

  /** Number of books (optional) */
  @Prop()
  books?: number;

  /** Number of physical objects (optional) */
  @Prop()
  objects?: number;

  /** Number of photos (optional) */
  @Prop()
  photos?: number;

  /** Number of engravings (optional) */
  @Prop()
  engravings?: number;

  /** Number of slides (optional) */
  @Prop()
  slides?: number;

  /** Number of negatives (optional) */
  @Prop()
  negatives?: number;

  /** Number of maps, plans, or sketches (optional) */
  @Prop()
  mapsPlansSketches?: number;
}

/**
 * Schema definition for Volume Quantities using Mongoose.
 */
export const VolumeQuantitiesSchema =
  SchemaFactory.createForClass(VolumeQuantities);
