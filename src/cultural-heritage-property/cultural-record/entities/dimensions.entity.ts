import { DimensionsModel } from '../models/cultural-record';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForNumber } from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
/**
 * Entity representing the dimensions of an object (height, width, weight, etc.).
 *
 * This entity models the dimensions of a cultural property, including height, weight, area, and volume.
 */
export class DimensionsEntity implements DimensionsModel {
  @ApiProperty({ type: FieldMetadataDtoForNumber })
  heightCms?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  widthCms?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  lengthCms?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  squareMeters?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  cubicMeters?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  weightKg?: FieldMetadata<number>;

  constructor(option: Partial<DimensionsModel>) {
    this.heightCms = FieldReviewStatusEntity.create(option.heightCms);
    this.widthCms = FieldReviewStatusEntity.create(option.widthCms);
    this.lengthCms = FieldReviewStatusEntity.create(option.lengthCms);
    this.squareMeters = FieldReviewStatusEntity.create(
      this.calculateSquareMeters(),
    );
    this.cubicMeters = FieldReviewStatusEntity.create(
      this.calculateCubicMeters(),
    );
    this.weightKg = FieldReviewStatusEntity.create(option.weightKg);
  }

  /**
   * Factory method to create a new instance of DimensionsEntity.
   *
   * @param option - The data for creating a DimensionsEntity.
   * @returns A new instance of DimensionsEntity.
   */
  static create(option: Partial<DimensionsModel>): DimensionsEntity {
    return new DimensionsEntity(option);
  }

  /**
   * Calculates the square meters (area) based on heightCms and widthCms.
   * If either value is missing, it returns 0.
   *
   * @returns The calculated square meters, or 0 if heightCms or widthCms is missing.
   */
  calculateSquareMeters(): FieldMetadata<number> {
    const calculateSquareMeters: FieldMetadata<number> = {
      value: 0,
    } as FieldMetadata<number>;

    if (this.heightCms && this.widthCms) {
      calculateSquareMeters.value =
        (this.heightCms.value * this.widthCms.value) / 10000;
      return calculateSquareMeters; // Convert from cm² to m²
    }
    calculateSquareMeters.value = 0;
    return calculateSquareMeters; // If heightCms or widthCms is missing, return 0
  }

  /**
   * Calculates the cubic meters (volume) based on heightCms, widthCms, and lengthCms.
   * If any value is missing, it returns 0.
   *
   * @returns The calculated cubic meters, or 0 if any of the dimensions are missing.
   */
  calculateCubicMeters(): FieldMetadata<number> {
    const calculateCubicMeter: FieldMetadata<number> = {
      value: 0,
    } as FieldMetadata<number>;

    if (this.heightCms && this.widthCms && this.lengthCms) {
      calculateCubicMeter.value =
        (this.heightCms.value * this.widthCms.value * this.lengthCms.value) /
        1000000;
      return calculateCubicMeter;
    }
    calculateCubicMeter.value = 0;
    return calculateCubicMeter; // If any dimension is missing, return 0
  }
}
