import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { NonFunctionProperties } from '../../../common/interfaces/manipulate-properties';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Interface representing a model for volume quantities information.
 */
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

/**
 * Represents a model for dimensions and measurements.
 *
 * This interface is designed to encapsulate various attributes of an object,
 * such as its dimensions in centimeters, area in square meters, volume in
 * cubic meters, and weight in kilograms. Each property is associated with
 * additional metadata.
 *
 * Properties:
 * - `heightCms`: The height of the object in centimeters.
 * - `widthCms`: The width of the object in centimeters.
 * - `lengthCms`: The length of the object in centimeters.
 * - `squareMeters`: The area of the object in square meters.
 * - `cubicMeters`: The volume of the object in cubic meters.
 * - `weightKg`: The weight of the object in kilograms.
 *
 * Optional fields may be provided based on the applicability to the specific object.
 */
export interface DimensionsModel {
  heightCms?: number;
  widthCms?: number;
  lengthCms?: number;
  squareMeters?: number;
  cubicMeters?: number;
  weightKg?: number;
}

/**
 * Represents a type definition for the properties of a `DimensionsModel` object,
 * excluding any function properties. This type is used to model attributes
 * related to dimensions while omitting any methods or functions present in
 * the original `DimensionsModel`.
 *
 * It is derived using the `NonFunctionProperties` utility type to isolate
 * only non-function members of `DimensionsModel`.
 */
export type DimensionsPropertiesModel = NonFunctionProperties<DimensionsModel>;

/**
 * Represents the data structure for a cultural record.
 * It contains various metadata fields for describing a cultural object and its associated information.
 */
export interface CulturalRecordModel {
  /** Title of the background associated with the cultural record (optional) */
  backgroundTitle?: FieldMetadata<string>;

  /** Title of the section within the cultural record (optional) */
  sectionTitle?: FieldMetadata<string>;

  /** Title of the cultural object */
  objectTitle: FieldMetadata<string>;

  /** Description of the cultural object */
  objectDescription: FieldMetadata<string>;

  /** Onomastic descriptors associated with the cultural record (optional) */
  onomasticDescriptors?: FieldMetadata<string>;

  /** Geographic descriptors (optional) */
  geographicDescriptors?: FieldMetadata<string>;

  /** Institutional descriptors (optional) */
  institutionalDescriptors?: FieldMetadata<string>;

  /** Subject descriptors (optional) */
  subjectDescriptors?: FieldMetadata<string>;

  /** Extreme dates for the cultural record (optional) */
  extremeDates?: FieldMetadata<{ start: Date; end: Date }>;

  /** Value grade of the cultural object */
  valueGrade: FieldMetadata<ValueGrade>;

  /** Description level of the cultural object */
  descriptionLevel: FieldMetadata<DescriptionLevel>;

  /** Valuation of the cultural object (optional) */
  valuation?: FieldMetadata<number>;

  /** Volume quantities associated with the cultural record */
  volumesQuantities: FieldMetadata<VolumeQuantitiesModel>;

  /** Dimensions associated with the cultural record */
  dimensions: FieldMetadata<DimensionsPropertiesModel>;

  languages: FieldMetadata<string[]>;
  supports: FieldMetadata<string[]>;
  letters: FieldMetadata<string[]>;
  descriptionInstrument: FieldMetadata<string[]>;
  conservationState: FieldMetadata<string[]>;
}

/**
 * Represents a model type that includes non-function properties of the `CulturalRecordModel`.
 * The `CulturalPropertiesModel` type is derived by extracting only the properties of the
 * `CulturalRecordModel` that are not functions, thus creating a type definition for the
 * data structure meant to encapsulate the relevant cultural record information.
 *
 * This type is intended to define a structural interface for objects handling cultural properties,
 * excluding any methods or functions that might exist within the `CulturalRecordModel`.
 */
export type CulturalPropertiesModel =
  NonFunctionProperties<CulturalRecordModel>;
