import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * An interface representing the structure of a location model. The model
 * stores metadata for various location attributes commonly used for
 * describing storage, exhibition, and organizational details.
 *
 * Properties:
 * - floor: Metadata for specifying the floor of a building.
 * - exhibitionRoom: Metadata for referring to a specific exhibition room.
 * - storage: Metadata for identifying a storage location.
 * - showcaseShelf: Metadata for a shelf within a showcase.
 * - shelfDrawer: Metadata for a specific shelf drawer.
 * - box: Metadata for identifying a particular box.
 * - fileFolder: Metadata for categorizing or identifying a file or folder.
 */
export interface LocationModel {
  floor: string;
  exhibitionRoom: string;
  storage: string;
  showcaseShelf: string;
  shelfDrawer: string;
  box: string;
  fileFolder: string;
}

/**
 * Represents the data model for entry and location record.
 *
 * This interface is designed to encapsulate metadata about an entry's
 * heritage and classification, as well as its associated location information.
 *
 * Properties:
 * - `heritageType`: Metadata about the type of heritage.
 * - `declarationType`: Metadata related to the declaration type.
 * - `inventoryNumber`: Metadata about the inventory tracking number.
 * - `genericClassification`: Metadata about the general classification of the entry.
 * - `pieceInventory`: Indicates if the model is a part of a piece inventory.
 * - `auxiliaryInventory`: Indicates if it is a part of auxiliary inventory.
 * - `objectName`: Metadata about the name or title of the object.
 * - `initialDescription`: Metadata about the object's initial description.
 * - `entryMethod`: Metadata about the method of entry.
 * - `entryDate`: Metadata specifying the date of the object's entry.
 * - `objectLocation`: Specifies the location details of the object.
 * - `institutionType`: Metadata specifying the type of institution associated.
 */
export interface EntryAndLocationRecordModel {
  heritageType: FieldMetadata<HeritageType>;
  declarationType: FieldMetadata<string>;
  inventoryNumber: FieldMetadata<string>;
  genericClassification: FieldMetadata<GenericClassification>;
  pieceInventory: FieldMetadata<boolean>;
  auxiliaryInventory: FieldMetadata<boolean>;
  objectName: FieldMetadata<string>;
  initialDescription: FieldMetadata<string>;
  entryMethod: FieldMetadata<string>;
  entryDate: FieldMetadata<Date>;

  objectLocation: FieldMetadata<LocationModel>;
  institutionType: FieldMetadata<InstitutionType>;
}
