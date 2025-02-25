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
  @IsString()
  backgroundTitle?: string;

  /**
   * Title representing the section of the cultural record.
   */
  @IsOptional()
  @IsString()
  sectionTitle?: string;

  /**
   * The main object title for the cultural record.
   */
  @IsString()
  objectTitle: string;

  /**
   * Description of the object for the cultural record.
   */
  @IsString()
  objectDescription: string;

  /**
   * Onomastic descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  onomasticDescriptors?: string;

  /**
   * Geographic descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  geographicDescriptors?: string;

  /**
   * Institutional descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  institutionalDescriptors?: string;

  /**
   * Subject descriptors related to the cultural record.
   */
  @IsOptional()
  @IsString()
  subjectDescriptors?: string;

  /**
   * Extreme dates (start and end) associated with the cultural record.
   */
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => ExtremeDatesDto)
  extremeDates?: ExtremeDatesDto;

  /**
   * The value grade of the cultural record.
   */
  @IsEnum(ValueGrade)
  valueGrade: ValueGrade;

  /**
   * The description level of the cultural record.
   */
  @IsEnum(DescriptionLevel)
  descriptionLevel: DescriptionLevel;

  /**
   * Valuation of the cultural record.
   */
  @IsOptional()
  @IsNumber()
  valuation?: number;

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
  languages: string[];

  /**
   * Supports related to the cultural record (e.g., paper, digital).
   */
  @IsArray()
  @IsString({ each: true })
  supports: string[];

  /**
   * Letters associated with the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  letters: string[];

  /**
   * Instruments used in the description of the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  descriptionInstrument: string[];

  /**
   * Conservation states of the cultural record.
   */
  @IsArray()
  @IsString({ each: true })
  conservationState: string[];
}
