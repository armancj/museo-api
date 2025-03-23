import { LocationModel } from '../models/entry-and-location-record.model';
import { FieldMetadataDtoForString } from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';

/**
 * Entity representing a Location.
 * @implements {LocationModel}
 */
export class LocationEntity implements LocationModel {
  @ApiProperty({ type: () => FieldMetadataDtoForString })
  box: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  exhibitionRoom: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  fileFolder: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  floor: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  shelfDrawer: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  showcaseShelf: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  storage: FieldMetadata<string>;

  /**
   * Creates an instance of LocationEntity.
   * @param {Partial<LocationModel>} option - The initialization options.
   */
  constructor(option: LocationModel) {
    this.box = FieldReviewStatusEntity.create(option.box);
    this.exhibitionRoom = FieldReviewStatusEntity.create(option.exhibitionRoom);
    this.fileFolder = FieldReviewStatusEntity.create(option.fileFolder);
    this.floor = FieldReviewStatusEntity.create(option.floor);
    this.shelfDrawer = FieldReviewStatusEntity.create(option.shelfDrawer);
    this.showcaseShelf = FieldReviewStatusEntity.create(option.showcaseShelf);
    this.storage = FieldReviewStatusEntity.create(option.storage);
  }

  /**
   * Factory method to create a new LocationEntity instance.
   * @param {LocationModel} option - The initialization options.
   * @returns {LocationEntity} The newly created LocationEntity.
   */
  static create(option: LocationModel): LocationEntity {
    return new LocationEntity(option);
  }
}
