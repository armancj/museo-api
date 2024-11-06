import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../address/institutions/enum/institutions.enum';

export interface Location {
  floor: string;
  exhibitionRoom: string;
  storage: string;
  showcaseShelf: string;
  shelfDrawer: string;
  box: string;
  fileFolder: string;
}

export interface EntryAndLocationRecordPart1 {
  heritageType: HeritageType;
  declarationType: string; // assuming this is a selectable list
  inventoryNumber: string; // alphanumeric value
  genericClassification: GenericClassification;
  pieceInventory: boolean;
  auxiliaryInventory: boolean;
  objectName: string; // name of the object, piece, building or intangible manifestation
  initialDescription: string; // text field
  entryMethod: string; // method of entry into the institution
  entryDate: Date; // date of entry
  objectLocation: Location;
  institutionType: InstitutionType;
}
