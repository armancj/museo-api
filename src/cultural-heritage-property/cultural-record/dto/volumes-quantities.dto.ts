import { IsOptional, IsInt, Min } from 'class-validator';
import { VolumeQuantitiesModel } from '../models/cultural-record';

/**
 * Data Transfer Object for Volume Quantities.
 * This DTO represents the quantity of various types of volumes such as books, engravings, etc.
 */
export class VolumesQuantitiesDto implements VolumeQuantitiesModel {
  /**
   * Number of books (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  books?: number;

  /**
   * Number of engravings (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  engravings?: number;

  /**
   * Number of files (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  file?: number;

  /**
   * Number of maps, plans, or sketches (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  mapsPlansSketches?: number;

  /**
   * Number of negatives (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  negatives?: number;

  /**
   * Number of objects (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  objects?: number;

  /**
   * Number of pages (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  pages?: number;

  /**
   * Number of photos (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  photos?: number;

  /**
   * Number of slides (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  slides?: number;
}
