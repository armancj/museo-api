import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import {
  AccessAndUseConditions, AssociatedDocumentation,
  CulturalPropertiesModel,
  CulturalRecordModel, DescriptionControl, Dimensions, Notes, VolumeQuantities
} from "../cultural-record/models/cultural-record";
import { DescriptionLevel, ValueGrade } from "../cultural-record/enum/cultural-record.enum";

export type CulturalHeritagePropertyDocument = HydratedDocument<CulturalHeritageProperty>;

@Schema()
export class CulturalHeritageProperty
  implements
    CulturalPropertiesModel {

  // CulturalRecord
  accessAndUseConditions: AccessAndUseConditions;
  associatedDocumentation: AssociatedDocumentation;
  backgroundTitle: string;
  conservationState: string[];
  descriptionControl: DescriptionControl;
  descriptionInstrument: string[];
  descriptionLevel: DescriptionLevel;
  dimensions: Dimensions;
  extremeDates: { start: Date; end: Date };
  geographicDescriptors: string;
  institutionalDescriptors: string;
  languages: string[];
  letters: string[];
  notes: Notes;
  objectDescription: string;
  objectTitle: string;
  onomasticDescriptors: string;
  sectionTitle: string;
  subjectDescriptors: string;
  supports: string[];
  valuation: number;
  valueGrade: ValueGrade;
  volumesQuantities: VolumeQuantities;
}

export const CulturalHeritagePropertySchema = SchemaFactory.createForClass(CulturalHeritageProperty);

export const CulturalHeritagePropertyEntity = 'CulturalHeritageProperty';
export type CulturalHeritagePropertyModel = Model<CulturalHeritagePropertyDocument>;