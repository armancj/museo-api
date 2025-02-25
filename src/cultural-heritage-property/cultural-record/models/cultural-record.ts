import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { NonFunctionProperties } from '../../../common/interfaces/manipulate-properties';

/**
 * Interface for volume quantities.
 *
 * Represents the quantities of various types of physical and digital volumes.
 */
export interface VolumeQuantitiesModel {
  /** Number of files (optional) */
  file?: number;

  /** Number of pages (optional) */
  pages?: number;

  /** Number of books (optional) */
  books?: number;

  /** Number of physical objects (optional) */
  objects?: number;

  /** Number of photographs (optional) */
  photos?: number;

  /** Number of engravings (optional) */
  engravings?: number;

  /** Number of slides (optional) */
  slides?: number;

  /** Number of negatives (optional) */
  negatives?: number;

  /** Number of maps, plans, or sketches (optional) */
  mapsPlansSketches?: number;
}

/**
 * Interface for dimensions of objects.
 *
 * Represents physical dimensions and provides methods for calculations.
 */
export interface DimensionsModel {
  /** Height in centimeters (optional) */
  heightCms?: number;

  /** Width in centimeters (optional) */
  widthCms?: number;

  /** Length in centimeters (optional) */
  lengthCms?: number;

  /** Area in square meters (optional) */
  squareMeters?: number;

  /** Volume in cubic meters (optional) */
  cubicMeters?: number;

  /** Weight in kilograms (optional) */
  weightKg?: number;

  /** Method to calculate square meters based on dimensions */
  calculateSquareMeters: () => number;

  /** Method to calculate cubic meters based on dimensions */
  calculateCubicMeters: () => number;
}

/**
 * Type alias for dimension properties excluding functions.
 */
export type DimensionsPropertiesModel = NonFunctionProperties<DimensionsModel>;

/**
 * Interface for a cultural record.
 *
 * Represents a comprehensive cultural record including titles, descriptors, quantities, dimensions, and more.
 */
export interface CulturalRecordModel {
  /** Title of the background associated with the cultural record (optional) */
  backgroundTitle?: string;

  /** Title of the section within the cultural record (optional) */
  sectionTitle?: string;

  /** Title of the cultural object */
  objectTitle: string;

  /** Description of the cultural object */
  objectDescription: string;

  /** Onomastic descriptors associated with the cultural record (optional) */
  onomasticDescriptors?: string;

  /** Geographic descriptors (optional) */
  geographicDescriptors?: string;

  /** Institutional descriptors (optional) */
  institutionalDescriptors?: string;

  /** Subject descriptors (optional) */
  subjectDescriptors?: string;

  /** Extreme dates for the cultural record (optional) */
  extremeDates?: { start: Date; end: Date };

  /** Value grade of the cultural object */
  valueGrade: ValueGrade;

  /** Description level of the cultural object */
  descriptionLevel: DescriptionLevel;

  /** Valuation of the cultural object (optional) */
  valuation?: number;

  /** Volume quantities associated with the cultural record */
  volumesQuantities: VolumeQuantitiesModel;

  /** Dimensions associated with the cultural record */
  dimensions: DimensionsPropertiesModel;

  /** Languages represented in the cultural record */
  languages: string[];

  /** Supports available for the cultural record */
  supports: string[];

  /** Associated letters with the cultural record */
  letters: string[];

  /** Instruments used for describing the cultural object */
  descriptionInstrument: string[];

  /** State of conservation of the cultural object */
  conservationState: string[];
}

/**
 * Type alias for non-function properties of a cultural record.
 */
export type CulturalPropertiesModel =
  NonFunctionProperties<CulturalRecordModel>;
