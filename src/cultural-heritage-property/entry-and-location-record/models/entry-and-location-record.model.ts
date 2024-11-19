import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';

/**
 * Interface representing a Location Model.
 * @interface LocationModel
 */
export interface LocationModel {
  /**
   * The floor where the item is located.
   * @type {string}
   */
  floor: string;

  /**
   * The exhibition room where the item is displayed.
   * @type {string}
   */
  exhibitionRoom: string;

  /**
   * The storage area where the item is kept.
   * @type {string}
   */
  storage: string;

  /**
   * The showcase shelf where the item is exhibited.
   * @type {string}
   */
  showcaseShelf: string;

  /**
   * The shelf drawer where the item is stored.
   * @type {string}
   */
  shelfDrawer: string;

  /**
   * The box where the item is kept.
   * @type {string}
   */
  box: string;

  /**
   * The file folder where the item is archived.
   * @type {string}
   */
  fileFolder: string;
}

/**
 * Interface representing an Entry and Location Record Model.
 * @interface EntryAndLocationRecordModel
 */
export interface EntryAndLocationRecordModel {
  /**
   * The heritage type of the item.
   * @type {HeritageType}
   */
  heritageType: HeritageType;

  /**
   * The type of declaration.
   * @type {string}
   */
  declarationType: string;

  /**
   * The inventory number of the item.
   * @type {string}
   */
  inventoryNumber: string;

  /**
   * The generic classification of the item.
   * @type {GenericClassification}
   */
  genericClassification: GenericClassification;

  /**
   * Indicates if the item is in the piece inventory.
   * @type {boolean}
   */
  pieceInventory: boolean;

  /**
   * Indicates if the item is in the auxiliary inventory.
   * @type {boolean}
   */
  auxiliaryInventory: boolean;

  /**
   * The name of the object.
   * @type {string}
   */
  objectName: string;

  /**
   * A brief initial description of the item.
   * @type {string}
   */
  initialDescription: string;

  /**
   * The method of entry.
   * @type {string}
   */
  entryMethod: string;

  /**
   * The entry date.
   * @type {Date}
   */
  entryDate: Date;

  /**
   * The location details of the item.
   * @type {LocationModel}
   */
  objectLocation: LocationModel;

  /**
   * The type of institution.
   * @type {InstitutionType}
   */
  institutionType: InstitutionType;
}
