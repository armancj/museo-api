import { CulturalPropertyModel } from '../../models/cultural-property.model';
import { ProducerAuthorRecord } from './producer-author-record.entity';
import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';

export class ProducerAuthorRecords {
  private constructor(public value: CulturalPropertyModel[]) {}

  public static create(
    value: CulturalPropertyModel[],
  ): ProducerAuthorRecordModel[] {
    if (!Array.isArray(value))
      throw new TypeError('Input in producer author is not an array');

    return value.map((data) => {
      const { uuid, producerAuthor } = data;
      return ProducerAuthorRecord.create({
        uuid,
        ...producerAuthor,
      } as ProducerAuthorRecordModel);
    });
  }
}
