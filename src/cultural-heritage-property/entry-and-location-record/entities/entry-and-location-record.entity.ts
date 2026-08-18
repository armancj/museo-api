import {
  EntryAndLocationRecordModel,
  LocationModel,
} from '../models/entry-and-location-record.model';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  FieldMetadataDtoForBoolean,
  FieldMetadataDtoForEnum,
  FieldMetadataDtoForString,
} from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
import { MetadataObjectLocationDto } from '../dto/metadata-object-location.dto';

/**
 * Class representing an Entry and Location Record.
 * @implements {EntryAndLocationRecordModel}
 */
export class EntryAndLocationRecord implements EntryAndLocationRecordModel {
  @ApiProperty({ type: () => FieldMetadataDtoForBoolean })
  auxiliaryInventory: FieldMetadata<boolean>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  declarationType: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  entryDate: FieldMetadata<Date>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  entryMethod: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForEnum(GenericClassification) })
  genericClassification: FieldMetadata<GenericClassification>;

  @ApiProperty({ type: () => FieldMetadataDtoForEnum(HeritageType) })
  heritageType: FieldMetadata<HeritageType>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  initialDescription: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForEnum(InstitutionType) })
  institutionType: FieldMetadata<InstitutionType>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  inventoryNumber: FieldMetadata<string>;

  @ApiProperty({ type: () => MetadataObjectLocationDto })
  objectLocation: FieldMetadata<LocationModel>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  objectName: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForBoolean })
  pieceInventory: FieldMetadata<boolean>;

  /**
   * Creates an instance of EntryAndLocationRecord.
   * @param {Partial<EntryAndLocationRecordModel>} option - The initialization options.
   */
  constructor(option: Partial<EntryAndLocationRecordModel>) {
    if (option.auxiliaryInventory)
      this.auxiliaryInventory = FieldReviewStatusEntity.create(
        option.auxiliaryInventory,
      );
    if (option.declarationType)
      this.declarationType = FieldReviewStatusEntity.create(
        option.declarationType,
      );
    if (option.entryDate)
      this.entryDate = FieldReviewStatusEntity.create(option.entryDate);
    if (option.entryMethod)
      this.entryMethod = FieldReviewStatusEntity.create(option.entryMethod);
    if (option.genericClassification)
      this.genericClassification = FieldReviewStatusEntity.create(
        option.genericClassification,
      );
    if (option.heritageType)
      this.heritageType = FieldReviewStatusEntity.create(option.heritageType);
    if (option.initialDescription)
      this.initialDescription = FieldReviewStatusEntity.create(
        option.initialDescription,
      );
    if (option.institutionType)
      this.institutionType = FieldReviewStatusEntity.create(
        option.institutionType,
      );
    if (option.inventoryNumber)
      this.inventoryNumber = FieldReviewStatusEntity.create(
        option.inventoryNumber,
      );
    if (option.pieceInventory)
      this.pieceInventory = FieldReviewStatusEntity.create(
        option.pieceInventory,
      );
    if (option.objectName)
      this.objectName = FieldReviewStatusEntity.create(option.objectName);
    if (option.objectLocation)
      this.objectLocation = FieldReviewStatusEntity.create(
        option.objectLocation,
      );
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
