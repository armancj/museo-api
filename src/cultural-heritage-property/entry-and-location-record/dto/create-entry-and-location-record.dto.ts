import {
  EntryAndLocationRecordModel,
  LocationModel,
} from '../models/entry-and-location-record.model';
import { GenericClassification, HeritageType } from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  createDto,
  FieldMetadataDtoForBooleanWithoutHistory, FieldMetadataDtoForDateWithoutHistory,
  FieldMetadataDtoForStringWithoutHistory,
} from '../../field-review-status/dto/create.dto';
import { FieldMetadataDtoForEnum } from '../../field-review-status/dto/field-metadata-string.dto';
import { MetadataObjectLocationDto } from './metadata-object-location.dto';
import { FieldMetadataDateDto } from '../../field-review-status/dto/FieldMetadataDateDto';

export const FieldMetadataDtoEnumInstitutionType = createDto(
  FieldMetadataDtoForEnum(InstitutionType),
);

export const FieldMetadataDtoEnumHeritageType = createDto(FieldMetadataDtoForEnum(HeritageType));

export const FieldMetadataDtoEnumGenericClassification = createDto(
  FieldMetadataDtoForEnum(GenericClassification),
);

/**
 * Represents a data transfer object (DTO) for creating an entry and location record.
 * This class implements the `EntryAndLocationRecordModel` interface and encompasses
 * various properties needed to describe and validate data for an entry and its associated
 * location record.
 *
 * Each property corresponds to specific metadata fields and includes validation rules
 * to ensure the integrity of the data. These rules leverage decorators like `IsBoolean`,
 * `IsString`, `IsNotEmpty`, `IsDate`, and enumerators to enforce compliance with the expected format.
 *
 * The class also utilizes the `Type` decorator for defining transformation types to maintain
 * consistency within nested objects and complex data types.
 */
export class CreateEntryAndLocationRecordDto implements EntryAndLocationRecordModel {
  @ApiProperty({ type: () => FieldMetadataDtoForBooleanWithoutHistory })
  @Type(() => FieldMetadataDtoForBooleanWithoutHistory)
  @ValidateNested()
  auxiliaryInventory: FieldMetadata<boolean>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  declarationType: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForDateWithoutHistory })
  @ValidateNested()
  @Type(() => FieldMetadataDtoForDateWithoutHistory)
  entryDate: FieldMetadata<Date>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  entryMethod: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoEnumGenericClassification })
  @Type(() => FieldMetadataDtoEnumGenericClassification)
  @ValidateNested()
  genericClassification: FieldMetadata<GenericClassification>;

  @ApiProperty({ type: () => FieldMetadataDtoEnumHeritageType })
  @Type(() => FieldMetadataDtoEnumHeritageType)
  @ValidateNested()
  heritageType: FieldMetadata<HeritageType>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  initialDescription: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoEnumInstitutionType })
  @Type(() => FieldMetadataDtoEnumInstitutionType)
  @ValidateNested()
  institutionType: FieldMetadata<InstitutionType>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  inventoryNumber: FieldMetadata<string>;

  @Type(() => MetadataObjectLocationDto)
  @ValidateNested()
  objectLocation: FieldMetadata<LocationModel>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  objectName: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForBooleanWithoutHistory })
  @Type(() => FieldMetadataDtoForBooleanWithoutHistory)
  @ValidateNested()
  pieceInventory: FieldMetadata<boolean>;
}
