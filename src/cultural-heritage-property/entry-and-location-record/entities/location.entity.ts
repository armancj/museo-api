import { LocationModel } from '../models/entry-and-location-record.model';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';

/**
 * Entity representing a Location.
 * @implements {LocationModel}
 */
export class LocationEntity implements LocationModel {
  box: FieldMetadataDto<string>;
  exhibitionRoom: FieldMetadataDto<string>;
  fileFolder: FieldMetadataDto<string>;
  floor: FieldMetadataDto<string>;
  shelfDrawer: FieldMetadataDto<string>;
  showcaseShelf: FieldMetadataDto<string>;
  storage: FieldMetadataDto<string>;

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
