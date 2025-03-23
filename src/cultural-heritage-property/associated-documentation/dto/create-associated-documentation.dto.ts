import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForStringWithoutHistory } from '../../field-review-status/dto/create.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Data Transfer Object (DTO) for creating associated documentation.
 *
 * Implements the `AssociatedDocumentationModel` interface and includes validation rules using `class-validator`.
 */
export class CreateAssociatedDocumentationDto
  implements AssociatedDocumentationModel
{
  /**
   * Indicates the existence and location of copies.
   *
   * @type {string}
   * @remarks This field is required.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  copiesExistenceAndLocation: FieldMetadata<string>;

  /**
   * Indicates the existence and location of original documents.
   *
   * @type {string | undefined}
   * @optional This field is optional but must be a non-empty string if provided.
   */
  @IsOptional()
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  originalsExistenceAndLocation?: FieldMetadata<string>;

  /**
   * Provides information about related description units.
   *
   * @type {string | undefined}
   * @optional This field is optional but must be a non-empty string if provided.
   */
  @IsOptional()
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  relatedDescriptionUnits?: FieldMetadata<string>;

  /**
   * Contains information about related publications.
   *
   * @type {string}
   * @remarks This field is required.
   */
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  relatedPublicationsInformation: FieldMetadata<string>;
}
