import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { NonFunctionProperties } from "../../../common/interfaces/manipulate-properties";

export interface VolumeQuantities {
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

export interface Dimensions {
  heightCms?: number;
  widthCms?: number;
  lengthCms?: number;
  squareMeters?: number;
  cubicMeters?: number;
  weightKg?: number;
}

export interface AccessAndUseConditions {
  accessConditions: string[];
  reproductionConditions: string[];
  technicalRequirements: string;
}

export interface AssociatedDocumentation {
  originalsExistenceAndLocation?: string;
  copiesExistenceAndLocation: string;
  relatedDescriptionUnits?: string;
  relatedPublicationsInformation?: string;
}

export interface Notes {
  notes?: string;
}

export interface DescriptionControl {
  descriptionMadeBy: string;
  descriptionDateTime: Date;
  reviewedBy: string;
  reviewDateTime: Date;
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
  volumesQuantities: VolumeQuantities;
  dimensions: Dimensions;
  languages: string[];
  supports: string[];
  letters: string[];
  descriptionInstrument: string[];
  conservationState: string[];
  accessAndUseConditions: AccessAndUseConditions;
  associatedDocumentation: AssociatedDocumentation;
  notes: Notes;
  descriptionControl: DescriptionControl;
  calculateSquareMeters: () => number;
  calculateCubicMeters: () => number;
}

export type CulturalPropertiesModel = NonFunctionProperties<CulturalRecordModel>;