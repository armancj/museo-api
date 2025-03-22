import {
  IsString,
  IsOptional,
  IsEnum,
  IsArray,
  IsObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CulturalPropertiesModel } from '../models/cultural-record';

import { Type } from 'class-transformer';
import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { VolumesQuantitiesDto } from './volumes-quantities.dto';
import { DimensionsDto } from './dimensions.dto';
import { ExtremeDatesDto } from './extreme-dates.dto';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';

/**
 * Data Transfer Object (DTO) for creating a cultural record.
 *
 * This DTO contains the fields and validation rules for the `CulturalRecordModel`.
 */
export class CreateCulturalRecordDto implements CulturalPropertiesModel {
  /**
   * Title representing the background context of the cultural record.
   */
  @IsOptional()
  @Type(() => FieldMetadataDto)
  @IsString()
  backgroundTitle?: FieldMetadataDto<string>;

  /**
   * Title representing the section of the cultural record.
   */
  @IsOptional()
  @IsString()
  @Type(() => FieldMetadataDto)
  sectionTitle?: FieldMetadataDto<string>;

  /**
   * The main object title for the cultural record.
   */
  @IsString()
  @Type(() => FieldMetadataDto)
  objectTitle: FieldMetadataDto<string>;

  /**
   * Description of the object for the cultural record.
   */
  @IsString()
  @Type(() => FieldMetadataDto)
  objectDescription: FieldMetadataDto<string>;

  /**
   * Onomastic descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  @Type(() => FieldMetadataDto)
  onomasticDescriptors?: FieldMetadataDto<string>;

  /**
   * Geographic descriptors related to the cultural record.
   */
  @IsOptional()
  @Type(() => FieldMetadataDto)
  @IsString()
  geographicDescriptors?: FieldMetadataDto<string>;

  /**
   * Institutional descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  @Type(() => FieldMetadataDto)
  institutionalDescriptors?: FieldMetadataDto<string>;

  /**
   * Subject descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  @Type(() => FieldMetadataDto)
  subjectDescriptors?: FieldMetadataDto<string>;

  /**
   * Extreme dates (start and end) associated with the cultural record.
   */
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => FieldMetadataDto)
  extremeDates?: FieldMetadataDto<ExtremeDatesDto>;

  /**
   * The value grade of the cultural record.
   */
  @IsEnum(ValueGrade)
  @Type(() => FieldMetadataDto)
  valueGrade: FieldMetadataDto<ValueGrade>;

  /**
   * The description level of the cultural record.
   */
  @IsEnum(DescriptionLevel)
  @Type(() => FieldMetadataDto)
  descriptionLevel: FieldMetadataDto<DescriptionLevel>;

  /**
   * Valuation of the cultural record.
   */
  @IsOptional()
  @IsNumber()
  @Type(() => FieldMetadataDto)
  valuation?: FieldMetadataDto<number>;

  /**
   * Volume quantities related to the cultural record.
   */
  @IsObject()
  @ValidateNested()
  @Type(() => VolumesQuantitiesDto)
  volumesQuantities: VolumesQuantitiesDto;

  /**
   * Dimensions related to the cultural record.
   */
  @IsObject()
  @ValidateNested()
  @Type(() => DimensionsDto)
  @IsObject()
  dimensions: DimensionsDto;

  /**
   * Languages used in the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  @Type(() => FieldMetadataDto)
  languages: FieldMetadataDto<string[]>;

  /**
   * Supports related to the cultural record (e.g., paper, digital).
   */
  @IsArray()
  @IsString({ each: true })
  @Type(() => FieldMetadataDto)
  supports: FieldMetadataDto<string[]>;

  /**
   * Letters associated with the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  @Type(() => FieldMetadataDto)
  letters: FieldMetadataDto<string[]>;

  /**
   * Instruments used in the description of the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  @Type(() => FieldMetadataDto)
  descriptionInstrument: FieldMetadataDto<string[]>;

  /**
   * Conservation states of the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  @Type(() => FieldMetadataDto)
  conservationState: FieldMetadataDto<string[]>;
}
