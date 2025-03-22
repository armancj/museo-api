import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { IsNotEmpty, IsString } from 'class-validator';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';

export class CreateProducerAuthorRecordDto
  implements ProducerAuthorRecordModel
{
  @IsString()
  @IsNotEmpty()
  betweenStreet1: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  betweenStreet2: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  district: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  institutionalHistory: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  locality: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  municipality: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  number: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  objectEntryHistory: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  producerAuthorNames: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  province: FieldMetadataDto<string>;

  @IsString()
  @IsNotEmpty()
  street: FieldMetadataDto<string>;
}
