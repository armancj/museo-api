import { IsOptional, ValidateNested } from 'class-validator';
import { VolumeQuantitiesModel } from '../models/cultural-record';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForNumberWithoutHistory } from '../../field-review-status/dto/create.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Data Transfer Object for Volume Quantities.
 * This DTO represents the quantity of various types of volumes such as books, engravings, etc.
 */
export class VolumesQuantitiesDto implements VolumeQuantitiesModel {
  /**
   * Number of books (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  books?: FieldMetadata<number>;

  /**
   * Number of engravings (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  engravings?: FieldMetadata<number>;

  /**
   * Number of files (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  file?: FieldMetadata<number>;

  /**
   * Number of maps, plans, or sketches (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  mapsPlansSketches?: FieldMetadata<number>;

  /**
   * Number of negatives (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  negatives?: FieldMetadata<number>;

  /**
   * Number of objects (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  objects?: FieldMetadata<number>;

  /**
   * Number of pages (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  pages?: FieldMetadata<number>;

  /**
   * Number of photos (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  photos?: FieldMetadata<number>;

  /**
   * Number of slides (optional).
   * Must be a non-negative integer.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForNumberWithoutHistory })
  @IsOptional()
  @Type(() => FieldMetadataDtoForNumberWithoutHistory)
  @ValidateNested()
  slides?: FieldMetadata<number>;
}
