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

/**
 * DTO for creating an entry and location record.
 * @typedef {Object} CreateEntryAndLocationRecordDto
 * @property {boolean} auxiliaryInventory - Indicates if the item is in the auxiliary inventory.
 * @property {string} declarationType - The type of declaration.
 * @property {Date} entryDate - The entry date.
 * @property {string} entryMethod - The method of entry.
 * @property {GenericClassification} genericClassification - The generic classification of the item.
 * @property {HeritageType} heritageType - The heritage type of the item.
 * @property {string} initialDescription - A brief initial description of the item.
 * @property {InstitutionType} institutionType - The type of institution.
 * @property {string} inventoryNumber - The inventory number.
 * @property {CreateLocationDto} objectLocation - The location details of the item.
 * @property {string} objectName - The name of the object.
 * @property {boolean} pieceInventory - Indicates if the item is in the piece inventory.
 */
export class CreateEntryAndLocationRecordDto
  implements EntryAndLocationRecordModel
{
  @IsBoolean()
  auxiliaryInventory: boolean;

  @IsString()
  @IsNotEmpty()
  declarationType: string;

  @IsDate()
  entryDate: Date;

  @IsString()
  @IsNotEmpty()
  entryMethod: string;

  @IsEnum(GenericClassification)
  genericClassification: GenericClassification;

  @IsEnum(HeritageType)
  heritageType: HeritageType;

  @IsString()
  @IsNotEmpty()
  @Length(10, 200)
  initialDescription: string;

  @IsEnum(InstitutionType)
  institutionType: InstitutionType;

  @IsString()
  @IsNotEmpty()
  inventoryNumber: string;

  @ValidateNested()
  @Type(() => CreateLocationDto)
  objectLocation: CreateLocationDto;

  @IsString()
  @IsNotEmpty()
  objectName: string;

  @IsBoolean()
  pieceInventory: boolean;
}
