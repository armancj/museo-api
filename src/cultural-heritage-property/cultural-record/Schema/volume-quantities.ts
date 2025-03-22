import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VolumeQuantitiesModel } from '../models/cultural-record';
import { propTypeMongo } from '../../util/prop-type-mongo.function';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Mongoose schema for representing volume quantities.
 *
 * This schema captures different types of volumes related to cultural records,
 * such as files, pages, books, and other media.
 */
@Schema()
class VolumeQuantities implements VolumeQuantitiesModel {
  /** Number of files (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  file?: FieldMetadata<number>;

  /** Number of pages (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  pages?: FieldMetadata<number>;

  /** Number of books (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  books?: FieldMetadata<number>;

  /** Number of physical objects (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  objects?: FieldMetadata<number>;

  /** Number of photos (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  photos?: FieldMetadata<number>;

  /** Number of engravings (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  engravings?: FieldMetadata<number>;

  /** Number of slides (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  slides?: FieldMetadata<number>;

  /** Number of negatives (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  negatives?: FieldMetadata<number>;

  /** Number of maps, plans, or sketches (optional) */
  @Prop(
    propTypeMongo({
      type: Number,
      required: false,
    }),
  )
  mapsPlansSketches?: FieldMetadata<number>;
}

/**
 * Schema definition for Volume Quantities using Mongoose.
 */
export const VolumeQuantitiesSchema =
  SchemaFactory.createForClass(VolumeQuantities);
