import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CulturalPropertiesModel, Dimensions, VolumeQuantities } from "../models/cultural-record";
import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { DimensionsSchema } from "./dimensions";
import { VolumeQuantitiesSchema } from "./volume-quantities";

@Schema()
export class CulturalRecord implements CulturalPropertiesModel {
  backgroundTitle: string;
  conservationState: string[];
  descriptionInstrument: string[];
  descriptionLevel: DescriptionLevel;

  @Prop({ type: DimensionsSchema })
  dimensions: Dimensions;

  @Prop({ type: VolumeQuantitiesSchema })
  volumesQuantities: VolumeQuantities;
  extremeDates: { start: Date; end: Date };
  geographicDescriptors: string;
  institutionalDescriptors: string;
  languages: string[];
  letters: string[];
  objectDescription: string;
  objectTitle: string;
  onomasticDescriptors: string;
  sectionTitle: string;
  subjectDescriptors: string;
  supports: string[];
  valuation: number;
  valueGrade: ValueGrade;
}


export const CulturalRecordSchema = SchemaFactory.createForClass(CulturalRecord);
