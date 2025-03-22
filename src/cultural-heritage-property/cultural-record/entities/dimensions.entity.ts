import { DimensionsModel } from '../models/cultural-record';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';
/**
 * Entity representing the dimensions of an object (height, width, weight, etc.).
 *
 * This entity models the dimensions of a cultural property, including height, weight, area, and volume.
 */
export class DimensionsEntity implements DimensionsModel {
  heightCms?: FieldMetadataDto<number>;
  widthCms?: FieldMetadataDto<number>;
  lengthCms?: FieldMetadataDto<number>;
  squareMeters?: FieldMetadataDto<number>;
  cubicMeters?: FieldMetadataDto<number>;
  weightKg?: FieldMetadataDto<number>;

  constructor(option: Partial<DimensionsModel>) {
    this.heightCms = option.heightCms;
    this.widthCms = option.widthCms;
    this.lengthCms = option.lengthCms;
    this.squareMeters = this.calculateSquareMeters();
    this.cubicMeters = this.calculateCubicMeters();
    this.weightKg = option.weightKg;
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
  calculateSquareMeters(): FieldMetadataDto<number> {
    const calculateSquareMeters = new FieldMetadataDto<number>();

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
  calculateCubicMeters(): FieldMetadataDto<number> {
    const calculateCubicMeter = new FieldMetadataDto<number>();
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
