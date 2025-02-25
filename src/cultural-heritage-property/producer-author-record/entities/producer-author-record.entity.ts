import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';

export class ProducerAuthorRecord implements ProducerAuthorRecordModel {
  betweenStreet1: string;
  betweenStreet2: string;
  district: string;
  institutionalHistory: string;
  locality: string;
  municipality: string;
  number: string;
  objectEntryHistory: string;
  producerAuthorNames: string;
  province: string;
  street: string;

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
