import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { AssociatedDocumentationEntity } from './associated-documentation.entity';

export class ExtendedAssociatedDocumentationEntity extends AssociatedDocumentationEntity {
  uuid: string;

  constructor(
    option: Partial<AssociatedDocumentationModel & { uuid: string }>,
  ) {
    super(option);
    this.uuid = option.uuid;
  }
  static create(
    option: Partial<AssociatedDocumentationModel & { uuid: string }>,
  ): ExtendedAssociatedDocumentationEntity {
    return new ExtendedAssociatedDocumentationEntity(option);
  }
}
