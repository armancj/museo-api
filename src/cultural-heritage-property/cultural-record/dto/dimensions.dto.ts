import { DimensionsPropertiesModel } from '../models/cultural-record';
import { IsOptional, IsNumber, Min } from 'class-validator';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';
import { Type } from 'class-transformer';

/**
 * Data Transfer Object for Dimensions.
 * This DTO represents various dimensional measurements and calculation methods.
 */
export class DimensionsDto implements DimensionsPropertiesModel {
  /**
   * Height in centimeters (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => FieldMetadataDto)
  heightCms?: FieldMetadataDto<number>;

  /**
   * Width in centimeters (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Type(() => FieldMetadataDto)
  @Min(0)
  widthCms?: FieldMetadataDto<number>;

  /**
   * Length in centimeters (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => FieldMetadataDto)
  lengthCms?: FieldMetadataDto<number>;

  /**
   * Weight in kilograms (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => FieldMetadataDto)
  weightKg?: FieldMetadataDto<number>;
}
