import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { FieldMetadata } from '../models/field-review-status.model';
import { ChangeHistoryDto } from './change-history.dto';

type Metadata = {
  options?: ApiPropertyOptions;
  decorators?: Array<ClassDecorator | MethodDecorator | PropertyDecorator>;
};

export function createFieldMetadataDto<T>({
  options,
  decorators,
}: Metadata): new () => FieldMetadata<T> {
  class FieldMetadataDto implements FieldMetadata<T> {
    @ApiProperty(options)
    @applyDecorators(...decorators)
    value: T;

    @ApiProperty({
      enum: ['Pending', 'To Review', 'Reviewed', 'Has Issue'],
      default: 'To Review',
    })
    @IsString()
    @IsEnum(['To Review', 'Reviewed', 'Has Issue'], {
      message:
        'Status must be one of the following: To Review, Reviewed, Has Issue',
    })
    @IsNotEmpty()
    status: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';

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

  return FieldMetadataDto;
}
