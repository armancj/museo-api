import { CulturalPropertyModel } from '../models/cultural-property.model';
import { ProducerAuthorRecord } from '../../producer-author-record/entities/producer-author-record.entity';
import { AccessAndUseConditionsModel } from '../../access-and-use-conditions/models/access-and-use-conditions';
import { AccessAndUseCondition } from '../../access-and-use-conditions/entities/access-and-use-condition.entity';
import { AssociatedDocumentationModel } from '../../associated-documentation/models/associated-documentation-model';
import { AssociatedDocumentationEntity } from "../../associated-documentation/entities/associated-documentation.entity";

export class CulturalHeritageProperty implements CulturalPropertyModel {
  createdAt: Date;

  deleted: boolean;

  producerAuthor: ProducerAuthorRecord;

  accessAndUseConditions: AccessAndUseConditionsModel;

  associatedDocumentation: AssociatedDocumentationModel;

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
  }

  static create(option: CulturalPropertyModel): CulturalHeritageProperty {
    return new CulturalHeritageProperty(option);
  }
}
