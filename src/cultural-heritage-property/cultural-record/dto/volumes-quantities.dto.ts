import { IsOptional, IsInt, Min } from 'class-validator';
import { VolumeQuantitiesModel } from '../models/cultural-record';
import { Type } from 'class-transformer';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';

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
  @Type(() => FieldMetadataDto)
  books?: FieldMetadataDto<number>;

  /**
   * Number of engravings (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  engravings?: FieldMetadataDto<number>;

  /**
   * Number of files (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  file?: FieldMetadataDto<number>;

  /**
   * Number of maps, plans, or sketches (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  mapsPlansSketches?: FieldMetadataDto<number>;

  /**
   * Number of negatives (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  negatives?: FieldMetadataDto<number>;

  /**
   * Number of objects (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  objects?: FieldMetadataDto<number>;

  /**
   * Number of pages (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  pages?: FieldMetadataDto<number>;

  /**
   * Number of photos (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  photos?: FieldMetadataDto<number>;

  /**
   * Number of slides (optional).
   * Must be a non-negative integer.
   */
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => FieldMetadataDto)
  slides?: FieldMetadataDto<number>;
}
