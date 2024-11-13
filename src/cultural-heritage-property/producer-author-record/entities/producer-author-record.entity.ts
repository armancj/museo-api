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

  constructor(option: ProducerAuthorRecordModel) {
    Object.assign(this as ProducerAuthorRecordModel, option);
  }

  static create(option: ProducerAuthorRecordModel): ProducerAuthorRecord {
    return new ProducerAuthorRecord(option);
  }
}
