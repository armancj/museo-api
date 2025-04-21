import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForString } from '../../field-review-status/dto/field-metadata-string.dto';

/**
 * Entity class for representing associated documentation.
 *
 * Implements the `AssociatedDocumentationModel` interface, providing a structure
 * for handling associated documentation data.
 */
export class AssociatedDocumentationEntity
  implements AssociatedDocumentationModel
{
  /**
   * Indicates the existence and location of copies.
   *
   * @type {string}
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  copiesExistenceAndLocation: FieldMetadata<string>;

  /**
   * Indicates the existence and location of original documents.
   *
   * @type {string}
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  originalsExistenceAndLocation: FieldMetadata<string>;

  /**
   * Provides information about related description units.
   *
   * @type {string}
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  relatedDescriptionUnits: FieldMetadata<string>;

  /**
   * Contains information about related publications.
   *
   * @type {string}
   */
  @ApiProperty({ type: FieldMetadataDtoForString })
  relatedPublicationsInformation: FieldMetadata<string>;

  /**
   * Constructor for creating an instance of `AssociatedDocumentationEntity`.
   *
   * @param option Partial data to initialize the entity.
   */
  constructor(option: Partial<AssociatedDocumentationModel>) {
    this.copiesExistenceAndLocation = FieldReviewStatusEntity.create(
      option.copiesExistenceAndLocation,
    );
    this.originalsExistenceAndLocation = FieldReviewStatusEntity.create(
      option.originalsExistenceAndLocation,
    );
    this.relatedDescriptionUnits = FieldReviewStatusEntity.create(
      option.relatedDescriptionUnits,
    );
    this.relatedPublicationsInformation = FieldReviewStatusEntity.create(
      option.relatedPublicationsInformation,
    );
  }

  /**
   * Factory method to create a new `AssociatedDocumentationEntity` instance.
   *
   * @param option Full data required to create the entity.
   * @returns A new instance of `AssociatedDocumentationEntity`.
   */
  static create(
    option: AssociatedDocumentationModel,
  ): AssociatedDocumentationEntity {
    return new AssociatedDocumentationEntity(option);
  }
}
