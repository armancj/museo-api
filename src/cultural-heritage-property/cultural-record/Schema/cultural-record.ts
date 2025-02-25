import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CulturalPropertiesModel,
  DimensionsPropertiesModel,
  VolumeQuantitiesModel,
} from '../models/cultural-record';
import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { DimensionsSchema } from './dimensions';
import { VolumeQuantitiesSchema } from './volume-quantities';
import { ExtremeDatesSchema } from './extreme-dates.schema';

/**
 * Mongoose schema for a Cultural Record, representing detailed information about cultural properties.
 */
@Schema()
export class CulturalRecord implements CulturalPropertiesModel {
  /** Title of the background associated with the cultural record */
  @Prop()
  backgroundTitle: string;

  /** State of conservation of the cultural object */
  @Prop()
  conservationState: string[];

  /** Instruments used for describing the cultural object */
  @Prop()
  descriptionInstrument: string[];

  /** Description level of the cultural object, using an enumerated type */
  @Prop({ required: true, enum: DescriptionLevel })
  descriptionLevel: DescriptionLevel;

  /** Physical dimensions associated with the cultural record */
  @Prop({ type: DimensionsSchema })
  dimensions: DimensionsPropertiesModel;

  /** Quantities of several volumes such as books or photos */
  @Prop({ type: VolumeQuantitiesSchema })
  volumesQuantities: VolumeQuantitiesModel;

  /** Extreme start and end dates associated with the cultural record */
  @Prop({ type: ExtremeDatesSchema })
  extremeDates: { start: Date; end: Date };

  /** Geographic descriptors associated with the cultural record */
  @Prop()
  geographicDescriptors: string;

  /** Institutional descriptors associated with the cultural record */
  @Prop()
  institutionalDescriptors: string;

  /** Languages associated with the cultural record */
  @Prop()
  languages: string[];

  /** Letters associated with the cultural record */
  @Prop()
  letters: string[];

  /** Description of the cultural object */
  @Prop()
  objectDescription: string;

  /** Title of the cultural object */
  @Prop()
  objectTitle: string;

  /** Onomastic descriptors for the cultural record */
  @Prop()
  onomasticDescriptors: string;

  /** Title of the section within the cultural record */
  @Prop()
  sectionTitle: string;

  /** Subject descriptors for the cultural object */
  @Prop()
  subjectDescriptors: string;

  /** Supports available for the cultural record */
  @Prop()
  supports: string[];

  /** Valuation of the cultural object */
  @Prop()
  valuation: number;

  /** Value grade of the cultural object, using an enumerated type */
  @Prop({ required: true, enum: ValueGrade })
  valueGrade: ValueGrade;
}

/**
 * Schema definition for a Cultural Record using Mongoose.
 */
export const CulturalRecordSchema =
  SchemaFactory.createForClass(CulturalRecord);
