import { ProducerAuthorRecordModel } from '../../producer-author-record/models/producer-author-record.models';
import { BaseModel } from '../../../common/interfaces/base.model';
import { AccessAndUseConditionsModel } from '../../access-and-use-conditions/models/access-and-use-conditions';
import { AssociatedDocumentationModel } from '../../associated-documentation/models/associated-documentation-model';
import { CulturalRecordModel } from '../../cultural-record/models/cultural-record';
import { NotesModel } from '../../cultural-notes/models/cultural-notes-model';
import { EntryAndLocationRecordModel } from '../../entry-and-location-record/models/entry-and-location-record.model';
import { DescriptionControlModel } from '../../description-control/models/description-control-model';

export interface CulturalPropertyModel extends BaseModel {
  descriptionControl: DescriptionControlModel;
  entryAndLocation: EntryAndLocationRecordModel;
  producerAuthor: ProducerAuthorRecordModel;
  accessAndUseConditions: AccessAndUseConditionsModel;
  associatedDocumentation: AssociatedDocumentationModel;
  culturalRecord: CulturalRecordModel;
  notes: NotesModel;
}
