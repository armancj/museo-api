import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ProducerAuthorRecord } from './producer-author-record.entity';
import { ExtendedProducerAuthorRecord } from './extended-producer-author-record.entity';

export class ProducerAuthorRecords {
  private constructor(public value: CulturalPropertyModel[]) {}

  public static create(
    value: CulturalPropertyModel[],
  ): ExtendedProducerAuthorRecord[] {
    if (!Array.isArray(value))
      throw new TypeError('Input in producer author is not an array');

    return value
      .filter((data) => data.producerAuthor)
      .map((data) => {
        const { uuid, producerAuthor } = data;
        return { uuid, ...ProducerAuthorRecord.create(producerAuthor) };
      });
  }
}
