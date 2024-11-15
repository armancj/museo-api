import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { CulturalRecordModel } from '../models/cultural-record';
import { VolumeQuantitiesEntity } from './volume-quantities-entity';
import { DimensionsEntity } from './dimensions-entity';
import { ExtremeDatesEntity } from './extreme-dates.entity';

export class CulturalRecordEntity implements CulturalRecordModel {
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
  volumesQuantities: VolumeQuantitiesEntity;
  dimensions: DimensionsEntity;
  languages: string[];
  supports: string[];
  letters: string[];
  descriptionInstrument: string[];
  conservationState: string[];
  backgroundTitle: string;
  sectionTitle: string;

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
