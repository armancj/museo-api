import { ProducerAuthorRecordModel } from '../../producer-author-record/models/producer-author-record.models';
import { BaseModel } from '../../../common/interfaces/base.model';
import { AccessAndUseConditionsModel } from '../../access-and-use-conditions/models/access-and-use-conditions';
import { AssociatedDocumentationModel } from '../../associated-documentation/models/associated-documentation-model';

export interface CulturalPropertyModel extends BaseModel {
  producerAuthor: ProducerAuthorRecordModel;
  accessAndUseConditions: AccessAndUseConditionsModel;
  associatedDocumentation: AssociatedDocumentationModel;
}
