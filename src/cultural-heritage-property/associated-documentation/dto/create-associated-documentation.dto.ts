import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  copiesExistenceAndLocation: string;

  /**
   * Indicates the existence and location of original documents.
   *
   * @type {string | undefined}
   * @optional This field is optional but must be a non-empty string if provided.
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  originalsExistenceAndLocation?: string;

  /**
   * Provides information about related description units.
   *
   * @type {string | undefined}
   * @optional This field is optional but must be a non-empty string if provided.
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  relatedDescriptionUnits?: string;

  /**
   * Contains information about related publications.
   *
   * @type {string}
   * @remarks This field is required.
   */
  @IsString()
  @IsNotEmpty()
  relatedPublicationsInformation: string;
}
