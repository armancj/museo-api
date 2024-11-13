import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { NonFunctionProperties } from "../../../common/interfaces/manipulate-properties";

export interface VolumeQuantitiesModel {
  file?: number;
  pages?: number;
  books?: number;
  objects?: number;
  photos?: number;
  engravings?: number;
  slides?: number;
  negatives?: number;
  mapsPlansSketches?: number;
}

export interface DimensionsModel {
  heightCms?: number;
  widthCms?: number;
  lengthCms?: number;
  squareMeters?: number;
  cubicMeters?: number;
  weightKg?: number;
}

export interface CulturalRecordModel {
  backgroundTitle?: string;
  sectionTitle?: string;
  objectTitle: string;
  objectDescription: string;
  onomasticDescriptors?: string;
  geographicDescriptors?: string;
  institutionalDescriptors?: string;
  subjectDescriptors?: string;
  extremeDates?: { start: Date; end: Date };
  valueGrade: ValueGrade;
  descriptionLevel: DescriptionLevel;
  valuation?: number;
  volumesQuantities: VolumeQuantitiesModel;
  dimensions: DimensionsModel;
  languages: string[];
  supports: string[];
  letters: string[];
  descriptionInstrument: string[];
  conservationState: string[];
  calculateSquareMeters: () => number;
  calculateCubicMeters: () => number;
}

export type CulturalPropertiesModel = NonFunctionProperties<CulturalRecordModel>;