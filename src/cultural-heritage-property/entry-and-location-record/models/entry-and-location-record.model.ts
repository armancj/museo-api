import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';

export interface LocationModel {
  floor: string;
  exhibitionRoom: string;
  storage: string;
  showcaseShelf: string;
  shelfDrawer: string;
  box: string;
  fileFolder: string;
}

export interface EntryAndLocationRecordModel {
  heritageType: HeritageType;
  declarationType: string;
  inventoryNumber: string;
  genericClassification: GenericClassification;
  pieceInventory: boolean;
  auxiliaryInventory: boolean;
  objectName: string;
  initialDescription: string;
  entryMethod: string;
  entryDate: Date;
  objectLocation: Location;
  institutionType: InstitutionType;
}
