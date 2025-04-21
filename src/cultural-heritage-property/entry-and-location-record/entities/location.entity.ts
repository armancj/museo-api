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
  box: string;

  exhibitionRoom: string;

  fileFolder: string;

  floor: string;
  
  shelfDrawer: string;
  
  showcaseShelf: string;
  
  storage: string;

  /**
   * Creates an instance of LocationEntity.
   * @param {Partial<LocationModel>} option - The initialization options.
   */
  constructor(option: LocationModel) {
    this.box = option.box;
    this.exhibitionRoom = option.exhibitionRoom;
    this.fileFolder = option.fileFolder;
    this.floor = option.floor;
    this.shelfDrawer = option.shelfDrawer;
    this.showcaseShelf = option.showcaseShelf;
    this.storage = option.storage;
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
