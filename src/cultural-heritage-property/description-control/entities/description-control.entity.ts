import { DescriptionControlModel } from '../models/description-control-model';

/**
 * Class representing a Description Control.
 * This class implements the DescriptionControlModel and provides structure for description control records.
 */
export class DescriptionControl implements DescriptionControlModel {
  /**
   * Identifier of the person who made the description.
   */
  descriptionMadeBy: string;

  /**
   * Date and time when the description was made.
   */
  descriptionDateTime: Date;

  /**
   * Identifier of the person who reviewed the description.
   */
  reviewedBy: string;

  /**
   * Date and time when the description was reviewed.
   */
  reviewDateTime: Date;

  constructor(option: DescriptionControlModel) {
    this.descriptionMadeBy = option.descriptionMadeBy;
    this.descriptionDateTime = option.descriptionDateTime;
    this.reviewedBy = option.reviewedBy;
    this.reviewDateTime = option.reviewDateTime;
  }

  static create(option: DescriptionControlModel): DescriptionControl {
    return new DescriptionControl(option);
  }
}
