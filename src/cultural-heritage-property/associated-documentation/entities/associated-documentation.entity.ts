import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
export class AssociatedDocumentationEntity
  implements AssociatedDocumentationModel
{
  copiesExistenceAndLocation: string;
  originalsExistenceAndLocation: string;
  relatedDescriptionUnits: string;
  relatedPublicationsInformation: string;

  constructor(option: Partial<AssociatedDocumentationModel>) {
    this.copiesExistenceAndLocation = option.copiesExistenceAndLocation;
    this.originalsExistenceAndLocation = option.originalsExistenceAndLocation;
    this.relatedDescriptionUnits = option.relatedDescriptionUnits;
    this.relatedPublicationsInformation = option.relatedPublicationsInformation;
  }

  static create(
    option: AssociatedDocumentationModel,
  ): AssociatedDocumentationEntity {
    return new AssociatedDocumentationEntity(option);
  }
}
