import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { DescriptionControlModel } from '../models/description-control-model';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';

/**
 * Data Transfer Object for creating a Description Control.
 * This DTO represents the structure and validations needed when creating a description control record.
 */
export class CreateDescriptionControlDto implements DescriptionControlModel {
  /**
   * Date and time when the description was made.
   * Must be a valid Date object.
   */
  @IsDate()
  @Type(() => FieldMetadataDto)
  descriptionDateTime: FieldMetadataDto<Date>;

  /**
   * Identifier of the person who made the description.
   * Must be a non-empty string.
   */
  @IsString()
  @Type(() => FieldMetadataDto)
  descriptionMadeBy: FieldMetadataDto<string>;

  /**
   * Date and time when the description was reviewed.
   * Must be a valid Date object.
   */
  @IsDate()
  @Type(() => Date)
  @Type(() => FieldMetadataDto)
  reviewDateTime: FieldMetadataDto<Date>;

  /**
   * Identifier of the person who reviewed the description.
   * Must be a non-empty FieldMetadataDto<string>.
   */
  @IsString()
  @Type(() => FieldMetadataDto)
  reviewedBy: FieldMetadataDto<string>;
}
