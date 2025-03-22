import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { FieldMetadataDto } from '../../field-review-status/dto/FieldMetadataDto';

export class ProducerAuthorRecord implements ProducerAuthorRecordModel {
  betweenStreet1: FieldMetadataDto<string>;
  betweenStreet2: FieldMetadataDto<string>;
  district: FieldMetadataDto<string>;
  institutionalHistory: FieldMetadataDto<string>;
  locality: FieldMetadataDto<string>;
  municipality: FieldMetadataDto<string>;
  number: FieldMetadataDto<string>;
  objectEntryHistory: FieldMetadataDto<string>;
  producerAuthorNames: FieldMetadataDto<string>;
  province: FieldMetadataDto<string>;
  street: FieldMetadataDto<string>;

  constructor(option: Partial<ProducerAuthorRecordModel>) {
    this.betweenStreet1 = option.betweenStreet1;
    this.betweenStreet2 = option.betweenStreet2;
    this.district = option.district;
    this.institutionalHistory = option.institutionalHistory;
    this.locality = option.locality;
    this.municipality = option.municipality;
    this.number = option.number;
    this.objectEntryHistory = option.objectEntryHistory;
    this.producerAuthorNames = option.producerAuthorNames;
    this.province = option.province;
    this.street = option.street;
  }

  static create(option: ProducerAuthorRecordModel): ProducerAuthorRecord {
    return new ProducerAuthorRecord(option);
  }
}
