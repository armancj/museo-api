import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Classification, InstitutionType } from '../enum/institutions.enum';
import { InstitutionDtoPropertiesModel } from '../entities/institution.model';

export class CreateInstitutionDto implements InstitutionDtoPropertiesModel {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  referenceCode: string;

  @IsString()
  @IsNotEmpty()
  betweenStreet1: string;

  @IsString()
  @IsNotEmpty()
  betweenStreet2: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsString()
  @IsNotEmpty()
  locality: string;

  @IsString()
  @IsNotEmpty()
  province: string;

  @IsString()
  @IsNotEmpty()
  municipality: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  phone1: string;

  @IsOptional()
  @IsString()
  phone2?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsEnum(InstitutionType)
  @IsNotEmpty()
  institutionType: InstitutionType;

  @IsOptional()
  @IsEnum(Classification)
  classification?: Classification;

  @IsOptional()
  @IsString()
  typology?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
