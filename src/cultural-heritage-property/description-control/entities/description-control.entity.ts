import { DescriptionControlModel } from '../models/description-control-model';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';

/**
 * Class representing a Description Control.
 * This class implements the DescriptionControlModel and provides structure for description control records.
 */
export class DescriptionControl implements DescriptionControlModel {
  /**
   * Identifier of the person who made the description.
   */
  descriptionMadeBy: FieldMetadataDto<string>;

  /**
   * Date and time when the description was made.
   */
  descriptionDateTime: FieldMetadataDto<Date>;

  /**
   * Identifier of the person who reviewed the description.
   */
  reviewedBy: FieldMetadataDto<string>;

  /**
   * Date and time when the description was reviewed.
   */
  reviewDateTime: FieldMetadataDto<Date>;

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
