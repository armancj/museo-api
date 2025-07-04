import { CulturalPropertyModel } from '../models/cultural-property.model';
import { ProducerAuthorRecord } from '../../producer-author-record/entities/producer-author-record.entity';
import { AccessAndUseCondition } from '../../access-and-use-conditions/entities/access-and-use-condition.entity';
import { AssociatedDocumentationEntity } from '../../associated-documentation/entities/associated-documentation.entity';
import { CulturalRecordEntity } from '../../cultural-record/entities/cultural-record.entity';
import { EntryAndLocationRecord } from '../../entry-and-location-record/entities/entry-and-location-record.entity';
import { DescriptionControl } from '../../description-control/entities/description-control.entity';
import { CulturalNoteEntity } from '../../cultural-notes/entities/cultural-note.entity';
import { calculateOverallStatus } from '../util/calculate-overall-status.function';

export class CulturalHeritageProperty implements CulturalPropertyModel {
  createdAt: Date;

  deleted: boolean;

  producerAuthor: ProducerAuthorRecord;

  accessAndUseConditions: AccessAndUseCondition;

  associatedDocumentation: AssociatedDocumentationEntity;

  culturalRecord: CulturalRecordEntity;

  entryAndLocation: EntryAndLocationRecord;

  descriptionControl: DescriptionControl;

  notes: CulturalNoteEntity;

  updatedAt: Date;

  uuid: string;

  status?: 'Pending' | 'To Review' | 'Reviewed' | 'Has Issue';

  constructor(option: CulturalPropertyModel) {
    this.createdAt = option.createdAt;
    this.deleted = option.deleted;
    this.updatedAt = option.updatedAt;
    this.uuid = option.uuid;

    if (option.producerAuthor)
      this.producerAuthor = ProducerAuthorRecord.create(option.producerAuthor);

    if (option.accessAndUseConditions)
      this.accessAndUseConditions = AccessAndUseCondition.create(option.accessAndUseConditions);

    if (option.associatedDocumentation)
      this.associatedDocumentation = AssociatedDocumentationEntity.create(
        option.associatedDocumentation,
      );

    if (option.culturalRecord)
      this.culturalRecord = CulturalRecordEntity.create(option.culturalRecord);

    if (option.entryAndLocation)
      this.entryAndLocation = EntryAndLocationRecord.create(option.entryAndLocation);

    if (option.descriptionControl)
      this.descriptionControl = DescriptionControl.create(option.descriptionControl);

    if (option.notes) this.notes = CulturalNoteEntity.create(option.notes);

    this.status = calculateOverallStatus(option);
  }

  static create(option: CulturalPropertyModel): CulturalHeritageProperty {
    return new CulturalHeritageProperty(option);
  }
}
