import {
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { StatusObject } from '../models/field-review-status.model';
import { ChangeHistoryDto } from './change-history.dto';

/**
 * Specific DTO for FieldMetadata that handles Date type fields.
 */
export class FieldMetadataDateDto {
  @ApiProperty({ type: String, description: 'The date value in ISO-8601 format' })
  @Type(() => Date) // Ensures the value is transformed into a Date instance
  @IsDate({ message: 'The value must be a valid Date instance' }) // Validates that the value is a Date
  @IsNotEmpty({ message: 'The field value cannot be empty' })
  value: Date;

  @ApiProperty({
    enum: ['Pending', 'To Review', 'Reviewed', 'Has Issue'],
    default: 'To Review',
  })
  @IsString()
  @IsEnum(['To Review', 'Reviewed', 'Has Issue'], {
    message: 'Status must be one of the following: To Review, Reviewed, Has Issue',
  })
  @IsNotEmpty()
  status: StatusObject;

  @ApiProperty()
  @IsString()
  @IsOptional()
  comment?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  modifiedBy: string;

  @ApiProperty({
    type: () => [ChangeHistoryDto],
    isArray: true,
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ChangeHistoryDto)
  history: Array<ChangeHistoryDto>;
}
