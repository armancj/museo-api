import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DescriptionControlModel } from '../models/description-control-model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  FieldMetadataDtoForDateWithoutHistory,
  FieldMetadataDtoForStringWithoutHistory,
} from '../../field-review-status/dto/create.dto';

/**
 * Data Transfer Object for creating a Description Control.
 * This DTO represents the structure and validations needed when creating a description control record.
 */
export class CreateDescriptionControlDto implements DescriptionControlModel {
  /**
   * Date and time when the description was made.
   * Must be a valid Date object.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForDateWithoutHistory })
  @Type(() => FieldMetadataDtoForDateWithoutHistory)
  @ValidateNested()
  descriptionDateTime: FieldMetadata<Date>;

  /**
   * Identifier of the person who made the description.
   * Must be a non-empty string.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  descriptionMadeBy: FieldMetadata<string>;

  /**
   * Date and time when the description was reviewed.
   * Must be a valid Date object.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForDateWithoutHistory })
  @Type(() => FieldMetadataDtoForDateWithoutHistory)
  @ValidateNested()
  reviewDateTime: FieldMetadata<Date>;

  /**
   * Identifier of the person who reviewed the description.
   * Must be a non-empty FieldMetadataDto<string>.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  reviewedBy: FieldMetadata<string>;
}
