import { VolumeQuantitiesModel } from '../models/cultural-record';

/**
 * Entity representing the quantities related to volumes (files, pages, books, etc.).
 *
 * This entity models the quantities for different volume-related properties such as files, books, etc.
 */
export class VolumeQuantitiesEntity implements VolumeQuantitiesModel {
  file?: number;
  pages?: number;
  books?: number;
  objects?: number;
  photos?: number;
  engravings?: number;
  slides?: number;
  negatives?: number;
  mapsPlansSketches?: number;

  constructor(option: Partial<VolumeQuantitiesModel>) {
    this.file = option.file;
    this.pages = option.pages;
    this.books = option.books;
    this.objects = option.objects;
    this.photos = option.photos;
    this.engravings = option.engravings;
    this.slides = option.slides;
    this.negatives = option.negatives;
    this.mapsPlansSketches = option.mapsPlansSketches;
  }

  /**
   * Factory method to create a new instance of VolumeQuantitiesEntity.
   *
   * @param option - The data for creating a VolumeQuantitiesEntity.
   * @returns A new instance of VolumeQuantitiesEntity.
   */
  static create(
    option: Partial<VolumeQuantitiesModel>,
  ): VolumeQuantitiesEntity {
    return new VolumeQuantitiesEntity(option);
  }
}
