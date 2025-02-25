import { DimensionsPropertiesModel } from '../models/cultural-record';
import { IsOptional, IsNumber, Min } from 'class-validator';

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
  heightCms?: number;

  /**
   * Width in centimeters (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  widthCms?: number;

  /**
   * Length in centimeters (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  lengthCms?: number;

  /**
   * Weight in kilograms (optional).
   * Must be a non-negative number.
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  weightKg?: number;
}
