import { EntryAndLocationRecordModel } from '../models/entry-and-location-record.model';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { CreateLocationDto } from './create-location.dto';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';

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
export class CreateEntryAndLocationRecordDto
  implements EntryAndLocationRecordModel
{
  @IsBoolean()
  @Type(() => FieldMetadataDto)
  auxiliaryInventory: FieldMetadataDto<boolean>;

  @IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  declarationType: FieldMetadataDto<string>;

  @IsDate()
  @Type(() => FieldMetadataDto)
  entryDate: FieldMetadataDto<Date>;

  @IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  entryMethod: FieldMetadataDto<string>;

  @IsEnum(GenericClassification)
  @Type(() => FieldMetadataDto)
  genericClassification: FieldMetadataDto<GenericClassification>;

  @IsEnum(HeritageType)
  @Type(() => FieldMetadataDto)
  heritageType: FieldMetadataDto<HeritageType>;

  @IsString()
  @IsNotEmpty()
  @Length(10, 200)
  @Type(() => FieldMetadataDto)
  initialDescription: FieldMetadataDto<string>;

  @IsEnum(InstitutionType)
  @Type(() => FieldMetadataDto)
  institutionType: FieldMetadataDto<InstitutionType>;

  @IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  inventoryNumber: FieldMetadataDto<string>;

  @ValidateNested()
  @Type(() => CreateLocationDto)
  objectLocation: CreateLocationDto;

  @IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  objectName: FieldMetadataDto<string>;

  @IsBoolean()
  @Type(() => FieldMetadataDto)
  pieceInventory: FieldMetadataDto<boolean>;
}
