import { ProducerAuthorRecordModel } from '../../producer-author-record/models/producer-author-record.models';
import { BaseModel } from '../../../common/interfaces/base.model';
import {AccessAndUseConditionsModel} from "../../access-and-use-conditions/models/access-and-use-conditions";

export interface CulturalPropertyModel extends BaseModel {
  producerAuthor: ProducerAuthorRecordModel;
  accessAndUseConditions: AccessAndUseConditionsModel;
}
