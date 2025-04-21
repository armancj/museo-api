import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CulturalPropertiesModel,
  DimensionsModel,
  VolumeQuantitiesModel,
} from '../models/cultural-record';
import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { DimensionsSchema } from './dimensions';
import { VolumeQuantitiesSchema } from './volume-quantities';
import { ExtremeDatesSchema } from './extreme-dates.schema';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

/**
 * Mongoose schema for a Cultural Record, representing detailed information about cultural properties.
 */
@Schema()
export class CulturalRecord implements CulturalPropertiesModel {
  /** Title of the background associated with the cultural record */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  backgroundTitle: FieldMetadata<string>;

  /** State of conservation of the cultural object */
  @Prop(
    propTypeMongo({
      type: [String],
    }),
  )
  conservationState: FieldMetadata<string[]>;

  /** Instruments used for describing the cultural object */
  @Prop(
    propTypeMongo({
      type: [String],
    }),
  )
  descriptionInstrument: FieldMetadata<string[]>;

  /** Description level of the cultural object, using an enumerated type */
  @Prop(
    propTypeMongo({
      type: Number,
      enum: DescriptionLevel,
    }),
  )
  descriptionLevel: FieldMetadata<DescriptionLevel>;

  /** Physical dimensions associated with the cultural record */
  @Prop(
      propTypeMongo({
        type: DimensionsSchema,
      }),
  )
  dimensions: FieldMetadata<DimensionsModel>;

  /** Quantities of several volumes such as books or photos */
  @Prop(
      propTypeMongo({
        type: VolumeQuantitiesSchema,
      }),
  )
  volumesQuantities: FieldMetadata<VolumeQuantitiesModel>;

  /** Extreme start and end dates associated with the cultural record */
  @Prop(
    propTypeMongo({
      type: ExtremeDatesSchema,
    }),
  )
  extremeDates: FieldMetadata<{ start: Date; end: Date }>;

  /** Geographic descriptors associated with the cultural record */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  geographicDescriptors: FieldMetadata<string>;

  /** Institutional descriptors associated with the cultural record */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  institutionalDescriptors: FieldMetadata<string>;

  /** Languages associated with the cultural record */
  @Prop(
    propTypeMongo({
      type: [String],
    }),
  )
  languages: FieldMetadata<string[]>;

  /** Letters associated with the cultural record */
  @Prop(
    propTypeMongo({
      type: [String],
    }),
  )
  letters: FieldMetadata<string[]>;

  /** Description of the cultural object */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  objectDescription: FieldMetadata<string>;

  /** Title of the cultural object */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  objectTitle: FieldMetadata<string>;

  /** Onomastic descriptors for the cultural record */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  onomasticDescriptors: FieldMetadata<string>;

  /** Title of the section within the cultural record */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  sectionTitle: FieldMetadata<string>;

  /** Subject descriptors for the cultural object */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  subjectDescriptors: FieldMetadata<string>;

  /** Supports available for the cultural record */
  @Prop(
    propTypeMongo({
      type: [String],
    }),
  )
  supports: FieldMetadata<string[]>;

  /** Valuation of the cultural object */
  @Prop(
    propTypeMongo({
      type: Number,
    }),
  )
  valuation: FieldMetadata<number>;

  /** Value grade of the cultural object, using an enumerated type */
  @Prop(
    propTypeMongo({
      type: String,
      enum: ValueGrade,
    }),
  )
  valueGrade: FieldMetadata<ValueGrade>;
}

/**
 * Schema definition for a Cultural Record using Mongoose.
 */
export const CulturalRecordSchema =
  SchemaFactory.createForClass(CulturalRecord);
