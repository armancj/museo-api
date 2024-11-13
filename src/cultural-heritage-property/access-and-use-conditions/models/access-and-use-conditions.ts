export interface AccessAndUseConditionsModel {
  accessConditions: string[];
  reproductionConditions: string[];
  technicalRequirements: string;
}

export interface AssociatedDocumentationModel {
  originalsExistenceAndLocation?: string;
  copiesExistenceAndLocation: string;
  relatedDescriptionUnits?: string;
  relatedPublicationsInformation?: string;
}

export interface NotesModel {
  notes?: string;
}

export interface DescriptionControlModel {
  descriptionMadeBy: string;
  descriptionDateTime: Date;
  reviewedBy: string;
  reviewDateTime: Date;
}
