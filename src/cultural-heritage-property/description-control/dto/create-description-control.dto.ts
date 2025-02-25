import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { DescriptionControlModel } from '../models/description-control-model';

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
  @Type(() => Date)
  descriptionDateTime: Date;

  /**
   * Identifier of the person who made the description.
   * Must be a non-empty string.
   */
  @IsString()
  descriptionMadeBy: string;

  /**
   * Date and time when the description was reviewed.
   * Must be a valid Date object.
   */
  @IsDate()
  @Type(() => Date)
  reviewDateTime: Date;

  /**
   * Identifier of the person who reviewed the description.
   * Must be a non-empty string.
   */
  @IsString()
  reviewedBy: string;
}
