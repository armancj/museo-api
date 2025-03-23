import { DescriptionControlModel } from '../models/description-control-model';
import { ApiProperty } from '@nestjs/swagger';
import {
  FieldMetadataDtoForDate,
  FieldMetadataDtoForString,
} from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Class representing a Description Control.
 * This class implements the DescriptionControlModel and provides structure for description control records.
 */
export class DescriptionControl implements DescriptionControlModel {
  /**
   * Identifier of the person who made the description.
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  descriptionMadeBy: FieldMetadata<string>;

  /**
   * Date and time when the description was made.
   */
  @ApiProperty({ type: FieldMetadataDtoForDate })
  descriptionDateTime: FieldMetadata<Date>;

  /**
   * Identifier of the person who reviewed the description.
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  reviewedBy: FieldMetadata<string>;

  /**
   * Date and time when the description was reviewed.
   */
  @ApiProperty({ type: FieldMetadataDtoForDate })
  reviewDateTime: FieldMetadata<Date>;

  constructor(option: DescriptionControlModel) {
    this.descriptionMadeBy = FieldReviewStatusEntity.create(
      option.descriptionMadeBy,
    );
    this.descriptionDateTime = FieldReviewStatusEntity.create(
      option.descriptionDateTime,
    );
    this.reviewedBy = FieldReviewStatusEntity.create(option.reviewedBy);
    this.reviewDateTime = FieldReviewStatusEntity.create(option.reviewDateTime);
  }

  static create(option: DescriptionControlModel): DescriptionControl {
    return new DescriptionControl(option);
  }
}
