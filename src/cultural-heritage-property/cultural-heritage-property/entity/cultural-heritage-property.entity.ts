import { CulturalPropertyModel } from '../models/cultural-property.model';
import { ProducerAuthorRecord } from '../../producer-author-record/entities/producer-author-record.entity';
import { AccessAndUseCondition } from '../../access-and-use-conditions/entities/access-and-use-condition.entity';
import { AssociatedDocumentationEntity } from '../../associated-documentation/entities/associated-documentation.entity';
import { NotesModel } from '../../cultural-notes/models/cultural-notes-model';
import { CulturalRecordModel } from '../../cultural-record/models/cultural-record';
import { EntryAndLocationRecordModel } from '../../entry-and-location-record/models/entry-and-location-record.model';
import { DescriptionControlModel } from '../../description-control/models/description-control-model';

export class CulturalHeritageProperty implements CulturalPropertyModel {
  createdAt: Date;

  deleted: boolean;

  producerAuthor: ProducerAuthorRecord;

  accessAndUseConditions: AccessAndUseCondition;

  associatedDocumentation: AssociatedDocumentationEntity;

  culturalRecord: CulturalRecordModel;

  entryAndLocation: EntryAndLocationRecordModel;

  descriptionControl: DescriptionControlModel;

  notes: NotesModel;

  updatedAt: Date;

  uuid: string;

  constructor(option: CulturalPropertyModel) {
    this.createdAt = option.createdAt;
    this.deleted = option.deleted;
    this.updatedAt = option.updatedAt;
    this.uuid = option.uuid;

    if (option.producerAuthor)
      this.producerAuthor = ProducerAuthorRecord.create(option.producerAuthor);

    if (option.accessAndUseConditions)
      this.accessAndUseConditions = AccessAndUseCondition.create(
        option.accessAndUseConditions,
      );

    if (option.associatedDocumentation)
      this.associatedDocumentation = AssociatedDocumentationEntity.create(
        option.associatedDocumentation,
      );

    if (option.culturalRecord) this.culturalRecord = option.culturalRecord;

    if (option.entryAndLocation)
      this.entryAndLocation = option.entryAndLocation;

    if (option.descriptionControl)
      this.descriptionControl = option.descriptionControl;

    if (option.notes) this.notes = option.notes;
  }

  static create(option: CulturalPropertyModel): CulturalHeritageProperty {
    return new CulturalHeritageProperty(option);
  }
}
