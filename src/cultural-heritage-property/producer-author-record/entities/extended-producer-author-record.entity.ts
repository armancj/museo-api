import { ProducerAuthorRecord } from './producer-author-record.entity';
import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';

export class ExtendedProducerAuthorRecord extends ProducerAuthorRecord {
  uuid: string;

  constructor(option: Partial<ProducerAuthorRecordModel & { uuid: string }>) {
    super(option);
    if (option.uuid) this.uuid = option.uuid;
  }
  static create(
    option: Partial<ProducerAuthorRecordModel & { uuid: string }>,
  ): ExtendedProducerAuthorRecord {
    return new ExtendedProducerAuthorRecord(option);
  }
}
