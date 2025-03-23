import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { CulturalRecordModel } from '../models/cultural-record';
import { VolumeQuantitiesEntity } from './volume-quantities.entity';
import { DimensionsEntity } from './dimensions.entity';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  FieldMetadataDtoForArrayString,
  FieldMetadataDtoForEnum, FieldMetadataDtoForNumber,
  FieldMetadataDtoForString,
} from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldMetadataDtoForDate } from '../dto/create-cultural-record.dto';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';

/**
 * Entity class representing a cultural record.
 *
 * Implements the `CulturalRecordModel` interface and provides methods
 * for instantiating a cultural record with various properties like title,
 * description, descriptors, dimensions, and other attributes.
 */
export class CulturalRecordEntity implements CulturalRecordModel {
  /** Title of the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForString })
  objectTitle: FieldMetadata<string>;

  /** Description of the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForString })
  objectDescription: FieldMetadata<string>;

  /** Onomastic descriptors associated with the cultural object (optional) */
  @ApiProperty({ type: FieldMetadataDtoForString })
  onomasticDescriptors?: FieldMetadata<string>;

  /** Geographic descriptors (optional) */
  @ApiProperty({ type: FieldMetadataDtoForString })
  geographicDescriptors?: FieldMetadata<string>;

  /** Institutional descriptors (optional) */
  @ApiProperty({ type: FieldMetadataDtoForString })
  institutionalDescriptors?: FieldMetadata<string>;

  /** Subject descriptors (optional) */
  @ApiProperty({ type: FieldMetadataDtoForString })
  subjectDescriptors?: FieldMetadata<string>;

  /** Extreme start and end dates associated with the cultural record (optional) */
  @ApiProperty({ type: FieldMetadataDtoForDate })
  extremeDates?: FieldMetadata<{ start: Date; end: Date }>;

  /** Grade value of the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForEnum(ValueGrade) })
  valueGrade: FieldMetadata<ValueGrade>;

  /** Level of description for the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForEnum(DescriptionLevel) })
  descriptionLevel: FieldMetadata<DescriptionLevel>;

  /** Valuation of the cultural object (optional) */
  @ApiProperty({ type: FieldMetadataDtoForNumber })
  valuation?: FieldMetadata<number>;

  /** Volumes and quantities associated with the cultural record */
  volumesQuantities: VolumeQuantitiesEntity;

  /** Dimensions associated with the cultural record */
  dimensions: DimensionsEntity;

  /** Languages spoken or used in the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  languages: FieldMetadata<string[]>;

  /** Supports available for the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  supports: FieldMetadata<string[]>;

  /** Letters associated with the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  letters: FieldMetadata<string[]>;

  /** Instruments used for describing the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  descriptionInstrument: FieldMetadata<string[]>;

  /** State of conservation of the cultural object */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  conservationState: FieldMetadata<string[]>;

  /** Title of the background section */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  backgroundTitle: FieldMetadata<string>;

  /** Title of the section */
  @ApiProperty({ type: FieldMetadataDtoForString })
  sectionTitle: FieldMetadata<string>;

  /**
   * Constructor to initialize properties of CulturalRecordEntity.
   *
   * @param option - Partial data to initialize a cultural record.
   */
  constructor(option: Partial<CulturalRecordModel>) {
    this.objectTitle = FieldReviewStatusEntity.create(option.objectTitle);
    this.objectDescription = FieldReviewStatusEntity.create(
      option.objectDescription,
    );
    this.onomasticDescriptors = FieldReviewStatusEntity.create(
      option.onomasticDescriptors,
    );
    this.geographicDescriptors = FieldReviewStatusEntity.create(
      option.geographicDescriptors,
    );
    this.institutionalDescriptors = FieldReviewStatusEntity.create(
      option.institutionalDescriptors,
    );
    this.subjectDescriptors = FieldReviewStatusEntity.create(
      option.subjectDescriptors,
    );
    this.extremeDates = FieldReviewStatusEntity.create(option.extremeDates);
    this.valueGrade = FieldReviewStatusEntity.create(option.valueGrade);
    this.descriptionLevel = FieldReviewStatusEntity.create(
      option.descriptionLevel,
    );
    this.valuation = FieldReviewStatusEntity.create(option.valuation);

    if (option.volumesQuantities) {
      this.volumesQuantities = VolumeQuantitiesEntity.create(
        option.volumesQuantities,
      );
    }
    if (option.dimensions) {
      this.dimensions = DimensionsEntity.create(option.dimensions);
    }

    this.languages = FieldReviewStatusEntity.create(option.languages);
    this.supports = FieldReviewStatusEntity.create(option.supports);
    this.letters = FieldReviewStatusEntity.create(option.letters);
    this.descriptionInstrument = FieldReviewStatusEntity.create(
      option.descriptionInstrument,
    );
    this.conservationState = FieldReviewStatusEntity.create(
      option.conservationState,
    );
    this.backgroundTitle = FieldReviewStatusEntity.create(
      option.backgroundTitle,
    );
    this.sectionTitle = FieldReviewStatusEntity.create(option.sectionTitle);
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
