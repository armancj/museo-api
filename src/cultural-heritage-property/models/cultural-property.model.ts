import { ProducerAuthorRecordModel } from '../producer-author-record/models/producer-author-record.models';
import { BaseModel } from '../../common/interfaces/base.model';

export interface CulturalPropertyModel extends BaseModel {
  producerAuthor: ProducerAuthorRecordModel;
}
