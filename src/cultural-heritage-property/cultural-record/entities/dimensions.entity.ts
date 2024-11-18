import { DimensionsModel } from '../models/cultural-record';
/**
 * Entity representing the dimensions of an object (height, width, weight, etc.).
 *
 * This entity models the dimensions of a cultural property, including height, weight, area, and volume.
 */
export class DimensionsEntity implements DimensionsModel {
  heightCms?: number;
  widthCms?: number;
  lengthCms?: number;
  squareMeters?: number;
  cubicMeters?: number;
  weightKg?: number;

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
  calculateSquareMeters(): number {
    if (this.heightCms && this.widthCms) {
      return (this.heightCms * this.widthCms) / 10000; // Convert from cm² to m²
    }
    return 0; // If heightCms or widthCms is missing, return 0
  }

  /**
   * Calculates the cubic meters (volume) based on heightCms, widthCms, and lengthCms.
   * If any value is missing, it returns 0.
   *
   * @returns The calculated cubic meters, or 0 if any of the dimensions are missing.
   */
  calculateCubicMeters(): number {
    if (this.heightCms && this.widthCms && this.lengthCms) {
      return (this.heightCms * this.widthCms * this.lengthCms) / 1000000;
    }
    return 0; // If any dimension is missing, return 0
  }
}
