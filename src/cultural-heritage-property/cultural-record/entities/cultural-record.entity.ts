import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { CulturalRecordModel } from '../models/cultural-record';
import { VolumeQuantitiesEntity } from './volume-quantities.entity';
import { DimensionsEntity } from './dimensions.entity';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';

/**
 * Entity class representing a cultural record.
 *
 * Implements the `CulturalRecordModel` interface and provides methods
 * for instantiating a cultural record with various properties like title,
 * description, descriptors, dimensions, and other attributes.
 */
export class CulturalRecordEntity implements CulturalRecordModel {
  /** Title of the cultural object */
  objectTitle: FieldMetadataDto<string>;

  /** Description of the cultural object */
  objectDescription: FieldMetadataDto<string>;

  /** Onomastic descriptors associated with the cultural object (optional) */
  onomasticDescriptors?: FieldMetadataDto<string>;

  /** Geographic descriptors (optional) */
  geographicDescriptors?: FieldMetadataDto<string>;

  /** Institutional descriptors (optional) */
  institutionalDescriptors?: FieldMetadataDto<string>;

  /** Subject descriptors (optional) */
  subjectDescriptors?: FieldMetadataDto<string>;

  /** Extreme start and end dates associated with the cultural record (optional) */
  extremeDates?: FieldMetadataDto<{ start: Date; end: Date }>;

  /** Grade value of the cultural object */
  valueGrade: FieldMetadataDto<ValueGrade>;

  /** Level of description for the cultural object */
  descriptionLevel: FieldMetadataDto<DescriptionLevel>;

  /** Valuation of the cultural object (optional) */
  valuation?: FieldMetadataDto<number>;

  /** Volumes and quantities associated with the cultural record */
  volumesQuantities: VolumeQuantitiesEntity;

  /** Dimensions associated with the cultural record */
  dimensions: DimensionsEntity;

  /** Languages spoken or used in the cultural object */
  languages: FieldMetadataDto<string[]>;

  /** Supports available for the cultural object */
  supports: FieldMetadataDto<string[]>;

  /** Letters associated with the cultural object */
  letters: FieldMetadataDto<string[]>;

  /** Instruments used for describing the cultural object */
  descriptionInstrument: FieldMetadataDto<string[]>;

  /** State of conservation of the cultural object */
  conservationState: FieldMetadataDto<string[]>;

  /** Title of the background section */
  backgroundTitle: FieldMetadataDto<string>;

  /** Title of the section */
  sectionTitle: FieldMetadataDto<string>;

  /**
   * Constructor to initialize properties of CulturalRecordEntity.
   *
   * @param option - Partial data to initialize a cultural record.
   */
  constructor(option: Partial<CulturalRecordModel>) {
    this.objectTitle = option.objectTitle;
    this.objectDescription = option.objectDescription;
    this.onomasticDescriptors = option.onomasticDescriptors;
    this.geographicDescriptors = option.geographicDescriptors;
    this.institutionalDescriptors = option.institutionalDescriptors;
    this.subjectDescriptors = option.subjectDescriptors;
    this.extremeDates = option.extremeDates;
    this.valueGrade = option.valueGrade;
    this.descriptionLevel = option.descriptionLevel;
    this.valuation = option.valuation;

    if (option.volumesQuantities) {
      this.volumesQuantities = VolumeQuantitiesEntity.create(
        option.volumesQuantities,
      );
    }
    if (option.dimensions) {
      this.dimensions = DimensionsEntity.create(option.dimensions);
    }

    this.languages = option.languages;
    this.supports = option.supports;
    this.letters = option.letters;
    this.descriptionInstrument = option.descriptionInstrument;
    this.conservationState = option.conservationState;
    this.backgroundTitle = option.backgroundTitle;
    this.sectionTitle = option.sectionTitle;
  }

  /**
   * Factory method to create a new CulturalRecordEntity instance.
   *
   * @param option - The data for creating a CulturalRecordEntity.
   * @returns A new instance of the entity.
   */
  static create(option: Partial<CulturalRecordModel>): CulturalRecordEntity {
    return new CulturalRecordEntity(option);
  }
}
