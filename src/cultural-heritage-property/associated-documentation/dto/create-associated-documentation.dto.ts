import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';
import { Type } from 'class-transformer';

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
  @IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  copiesExistenceAndLocation: FieldMetadataDto<string>;

  /**
   * Indicates the existence and location of original documents.
   *
   * @type {string | undefined}
   * @optional This field is optional but must be a non-empty string if provided.
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  originalsExistenceAndLocation?: FieldMetadataDto<string>;

  /**
   * Provides information about related description units.
   *
   * @type {string | undefined}
   * @optional This field is optional but must be a non-empty string if provided.
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  relatedDescriptionUnits?: FieldMetadataDto<string>;

  /**
   * Contains information about related publications.
   *
   * @type {string}
   * @remarks This field is required.
   */
  @IsString()
  @IsNotEmpty()
  @Type(() => FieldMetadataDto)
  relatedPublicationsInformation: FieldMetadataDto<string>;
}
