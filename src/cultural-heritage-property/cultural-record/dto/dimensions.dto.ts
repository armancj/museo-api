import { DimensionsPropertiesModel } from '../models/cultural-record';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForNumberWithoutHistory } from '../../field-review-status/dto/create.dto';

/**
 * Data Transfer Object for Dimensions.
 * This DTO represents various dimensional measurements and calculation methods.
 */
export class DimensionsDto implements DimensionsPropertiesModel {
  /**
   * Height in centimeters (optional).
   * Must be a non-negative number.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  heightCms?: FieldMetadata<number>;

  /**
   * Width in centimeters (optional).
   * Must be a non-negative number.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  widthCms?: FieldMetadata<number>;

  /**
   * Length in centimeters (optional).
   * Must be a non-negative number.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  lengthCms?: FieldMetadata<number>;

  /**
   * Weight in kilograms (optional).
   * Must be a non-negative number.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  weightKg?: FieldMetadata<number>;
}
