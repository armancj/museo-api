import { AssociatedDocumentationModel } from "../models/associated-documentation-model";
import { IsString } from "class-validator";

export class CreateAssociatedDocumentationDto implements AssociatedDocumentationModel{
  @IsString()
  copiesExistenceAndLocation: string;
  originalsExistenceAndLocation?: string;
  relatedDescriptionUnits?: string;
  relatedPublicationsInformation: string;

}
