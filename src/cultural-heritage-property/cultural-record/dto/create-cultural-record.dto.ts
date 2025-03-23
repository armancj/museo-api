import { IsOptional, IsObject, ValidateNested } from 'class-validator';
import { CulturalPropertiesModel } from '../models/cultural-record';

import { Type } from 'class-transformer';
import { DescriptionLevel, ValueGrade } from '../enum/cultural-record.enum';
import { VolumesQuantitiesDto } from './volumes-quantities.dto';
import { DimensionsDto } from './dimensions.dto';
import { ExtremeDatesDto } from './extreme-dates.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  createDto,
  FieldMetadataDtoForNumberWithoutHistory,
  FieldMetadataDtoForStringArrayWithoutHistory,
  FieldMetadataDtoForStringWithoutHistory,
} from '../../field-review-status/dto/create.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { createFieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';
import { FieldMetadataDtoForEnum } from '../../field-review-status/dto/field-metadata-string.dto';

export const FieldMetadataDtoForDate = createFieldMetadataDto<string>({
  options: { type: ExtremeDatesDto },
  decorators: [ValidateNested()],
});

export const FieldMetadataDtoForDateWithoutHistory = createDto(
  FieldMetadataDtoForDate,
);

export const FieldMetadataDtoEnumValueGrade = createDto(
  FieldMetadataDtoForEnum(ValueGrade),
);

export const FieldMetadataDtoEnumDescriptionLevel = createDto(
  FieldMetadataDtoForEnum(DescriptionLevel),
);
/**
 * Data Transfer Object (DTO) for creating a cultural record.
 *
 * This DTO contains the fields and validation rules for the `CulturalRecordModel`.
 */
export class CreateCulturalRecordDto implements CulturalPropertiesModel {
  /**
   * Title representing the background context of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  backgroundTitle?: FieldMetadata<string>;

  /**
   * Title representing the section of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  sectionTitle?: FieldMetadata<string>;

  /**
   * The main object title for the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  objectTitle: FieldMetadata<string>;

  /**
   * Description of the object for the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  objectDescription: FieldMetadata<string>;

  /**
   * Onomastic descriptors related to the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  onomasticDescriptors?: FieldMetadata<string>;

  /**
   * Geographic descriptors related to the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  geographicDescriptors?: FieldMetadata<string>;

  /**
   * Institutional descriptors related to the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  institutionalDescriptors?: FieldMetadata<string>;

  /**
   * Subject descriptors related to the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  subjectDescriptors?: FieldMetadata<string>;

  /**
   * Extreme dates (start and end) associated with the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForDateWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForDateWithoutHistory)
  @ValidateNested()
  extremeDates?: FieldMetadata<ExtremeDatesDto>;

  /**
   * The value grade of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoEnumValueGrade })
  @Type(() => FieldMetadataDtoEnumValueGrade)
  @ValidateNested()
  valueGrade: FieldMetadata<ValueGrade>;

  /**
   * The description level of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoEnumDescriptionLevel })
  @Type(() => FieldMetadataDtoEnumDescriptionLevel)
  @ValidateNested()
  descriptionLevel: FieldMetadata<DescriptionLevel>;

  /**
   * Valuation of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  valuation?: FieldMetadata<number>;

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
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  languages: FieldMetadata<string[]>;

  /**
   * Supports related to the cultural record (e.g., paper, digital).
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  supports: FieldMetadata<string[]>;

  /**
   * Letters associated with the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  letters: FieldMetadata<string[]>;

  /**
   * Instruments used in the description of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  descriptionInstrument: FieldMetadata<string[]>;

  /**
   * Conservation states of the cultural record.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringArrayWithoutHistory })
  @Type(() => FieldMetadataDtoForStringArrayWithoutHistory)
  @ValidateNested()
  conservationState: FieldMetadata<string[]>;
}
