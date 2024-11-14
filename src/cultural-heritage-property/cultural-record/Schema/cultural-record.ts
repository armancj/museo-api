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

@Schema()
export class CulturalRecord implements CulturalPropertiesModel {
  @Prop()
  backgroundTitle: string;

  @Prop()
  conservationState: string[];

  @Prop()
  descriptionInstrument: string[];

  @Prop({ required: true, enum: DescriptionLevel })
  descriptionLevel: DescriptionLevel;

  @Prop({ type: DimensionsSchema })
  dimensions: DimensionsPropertiesModel;

  @Prop({ type: VolumeQuantitiesSchema })
  volumesQuantities: VolumeQuantitiesModel;

  @Prop({ type: ExtremeDatesSchema })
  extremeDates: { start: Date; end: Date };

  @Prop()
  geographicDescriptors: string;

  @Prop()
  institutionalDescriptors: string;

  @Prop()
  languages: string[];

  @Prop()
  letters: string[];

  @Prop()
  objectDescription: string;

  @Prop()
  objectTitle: string;

  @Prop()
  onomasticDescriptors: string;

  @Prop()
  sectionTitle: string;

  @Prop()
  subjectDescriptors: string;

  @Prop()
  supports: string[];

  @Prop()
  valuation: number;

  @Prop({ required: true, enum: ValueGrade })
  valueGrade: ValueGrade;
}

export const CulturalRecordSchema =
  SchemaFactory.createForClass(CulturalRecord);
