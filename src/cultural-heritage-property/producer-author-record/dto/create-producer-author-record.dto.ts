import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeHistoryStringDto {
  @ApiProperty()
  modifiedBy: string;

  @ApiProperty()
  previousValue: string;

  @ApiProperty()
  modifiedAt: Date;

  @ApiProperty({ required: false })
  comment?: string;
}

export class FieldMetadataStringDto {
  @ApiProperty()
  value: string;

  @ApiProperty({ enum: ['To Review', 'Reviewed', 'Has Issue'] })
  status: 'To Review' | 'Reviewed' | 'Has Issue';

  @ApiProperty({ required: false })
  comments?: string;

  @ApiProperty({ type: [ChangeHistoryStringDto] })
  @IsOptional()
  history: ChangeHistoryStringDto[];
}

export class CreateProducerAuthorRecordDto
  implements ProducerAuthorRecordModel
{
  /*@ApiProperty({ type: FieldMetadataStringDto })
  @ValidateNested()
  @Type(() => FieldMetadataStringDto)*/
  betweenStreet1: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  betweenStreet2: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  district: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  institutionalHistory: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  locality: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  municipality: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  number: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  objectEntryHistory: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  producerAuthorNames: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  province: FieldMetadataDto<string>;

  /*@IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)*/
  street: FieldMetadataDto<string>;
}
