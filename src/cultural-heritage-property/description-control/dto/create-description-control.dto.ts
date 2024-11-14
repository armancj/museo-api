import { DescriptionControlModel } from "../models/description-control-model";

export class CreateDescriptionControlDto implements DescriptionControlModel {
  descriptionDateTime: Date;
  descriptionMadeBy: string;
  reviewDateTime: Date;
  reviewedBy: string;

}
