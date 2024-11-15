/**
 * Interface for the Description Control Model.
 * This interface defines the properties required for a description control record.
 */
export interface DescriptionControlModel {
  descriptionMadeBy: string;
  descriptionDateTime: Date;
  reviewedBy: string;
  reviewDateTime: Date;
}
