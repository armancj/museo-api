import { EntryAndLocationRecordModel } from '../models/entry-and-location-record.model';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { LocationEntity } from './location.entity';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';

/**
 * Class representing an Entry and Location Record.
 * @implements {EntryAndLocationRecordModel}
 */
export class EntryAndLocationRecord implements EntryAndLocationRecordModel {
  auxiliaryInventory: FieldMetadataDto<boolean>;
  declarationType: FieldMetadataDto<string>;
  entryDate: FieldMetadataDto<Date>;
  entryMethod: FieldMetadataDto<string>;
  genericClassification: FieldMetadataDto<GenericClassification>;
  heritageType: FieldMetadataDto<HeritageType>;
  initialDescription: FieldMetadataDto<string>;
  institutionType: FieldMetadataDto<InstitutionType>;
  inventoryNumber: FieldMetadataDto<string>;
  objectLocation: LocationEntity;
  objectName: FieldMetadataDto<string>;
  pieceInventory: FieldMetadataDto<boolean>;

  /**
   * Creates an instance of EntryAndLocationRecord.
   * @param {Partial<EntryAndLocationRecordModel>} option - The initialization options.
   */
  constructor(option: Partial<EntryAndLocationRecordModel>) {
    this.auxiliaryInventory = option.auxiliaryInventory;
    this.declarationType = option.declarationType;
    this.entryDate = option.entryDate;
    this.entryMethod = option.entryMethod;
    this.genericClassification = option.genericClassification;
    this.heritageType = option.heritageType;
    this.initialDescription = option.initialDescription;
    this.institutionType = option.institutionType;
    this.inventoryNumber = option.inventoryNumber;
    this.pieceInventory = option.pieceInventory;
    this.objectName = option.objectName;
    if (option.objectLocation)
      this.objectLocation = LocationEntity.create(option.objectLocation);
  }

  /**
   * Factory method to create a new EntryAndLocationRecord instance.
   * @param {EntryAndLocationRecordModel} option - The initialization options.
   * @returns {EntryAndLocationRecord} The newly created EntryAndLocationRecord.
   */
  static create(option: EntryAndLocationRecordModel): EntryAndLocationRecord {
    return new EntryAndLocationRecord(option);
  }
}
