import { VolumeQuantitiesModel } from '../models/cultural-record';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForNumber } from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';

/**
 * Entity representing the quantities related to volumes (files, pages, books, etc.).
 *
 * This entity models the quantities for different volume-related properties such as files, books, etc.
 */
export class VolumeQuantitiesEntity implements VolumeQuantitiesModel {
  @ApiProperty({ type: FieldMetadataDtoForNumber })
  file?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  pages?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  books?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  objects?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  photos?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  engravings?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  slides?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  negatives?: FieldMetadata<number>;

  @ApiProperty({ type: FieldMetadataDtoForNumber })
  mapsPlansSketches?: FieldMetadata<number>;

  constructor(option: Partial<VolumeQuantitiesModel>) {
    this.file = FieldReviewStatusEntity.create(option.file);
    this.pages = FieldReviewStatusEntity.create(option.pages);
    this.books = FieldReviewStatusEntity.create(option.books);
    this.objects = FieldReviewStatusEntity.create(option.objects);
    this.photos = FieldReviewStatusEntity.create(option.photos);
    this.engravings = FieldReviewStatusEntity.create(option.engravings);
    this.slides = FieldReviewStatusEntity.create(option.slides);
    this.negatives = FieldReviewStatusEntity.create(option.negatives);
    this.mapsPlansSketches = FieldReviewStatusEntity.create(
      option.mapsPlansSketches,
    );
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
