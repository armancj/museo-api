import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { CulturalRecordModel } from '../models/cultural-record';
import { VolumeQuantitiesEntity } from './volume-quantities-entity';
import { DimensionsEntity } from './dimensions-entity';
import { ExtremeDatesEntity } from './extreme-dates.entity';

/**
 * Entity class representing a cultural record.
 *
 * Implements the `CulturalRecordModel` interface and provides methods
 * for instantiating a cultural record with various properties like title,
 * description, descriptors, dimensions, and other attributes.
 */
export class CulturalRecordEntity implements CulturalRecordModel {
  /** Title of the cultural object */
  objectTitle: string;

  /** Description of the cultural object */
  objectDescription: string;

  /** Onomastic descriptors associated with the cultural object (optional) */
  onomasticDescriptors?: string;

  /** Geographic descriptors (optional) */
  geographicDescriptors?: string;

  /** Institutional descriptors (optional) */
  institutionalDescriptors?: string;

  /** Subject descriptors (optional) */
  subjectDescriptors?: string;

  /** Extreme start and end dates associated with the cultural record (optional) */
  extremeDates?: { start: Date; end: Date };

  /** Grade value of the cultural object */
  valueGrade: ValueGrade;

  /** Level of description for the cultural object */
  descriptionLevel: DescriptionLevel;

  /** Valuation of the cultural object (optional) */
  valuation?: number;

  /** Volumes and quantities associated with the cultural record */
  volumesQuantities: VolumeQuantitiesEntity;

  /** Dimensions associated with the cultural record */
  dimensions: DimensionsEntity;

  /** Languages spoken or used in the cultural object */
  languages: string[];

  /** Supports available for the cultural object */
  supports: string[];

  /** Letters associated with the cultural object */
  letters: string[];

  /** Instruments used for describing the cultural object */
  descriptionInstrument: string[];

  /** State of conservation of the cultural object */
  conservationState: string[];

  /** Title of the background section */
  backgroundTitle: string;

  /** Title of the section */
  sectionTitle: string;

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
    this.extremeDates = ExtremeDatesEntity.create(option.extremeDates);
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

    this.languages = option.languages || [];
    this.supports = option.supports || [];
    this.letters = option.letters || [];
    this.descriptionInstrument = option.descriptionInstrument || [];
    this.conservationState = option.conservationState || [];
    this.backgroundTitle = option.backgroundTitle || '';
    this.sectionTitle = option.sectionTitle || '';
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
