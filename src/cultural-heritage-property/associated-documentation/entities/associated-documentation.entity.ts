import { AssociatedDocumentationModel } from '../models/associated-documentation-model';

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
  copiesExistenceAndLocation: string;

  /**
   * Indicates the existence and location of original documents.
   *
   * @type {string}
   */
  originalsExistenceAndLocation: string;

  /**
   * Provides information about related description units.
   *
   * @type {string}
   */
  relatedDescriptionUnits: string;

  /**
   * Contains information about related publications.
   *
   * @type {string}
   */
  relatedPublicationsInformation: string;

  /**
   * Constructor for creating an instance of `AssociatedDocumentationEntity`.
   *
   * @param option Partial data to initialize the entity.
   */
  constructor(option: Partial<AssociatedDocumentationModel>) {
    this.copiesExistenceAndLocation = option.copiesExistenceAndLocation;
    this.originalsExistenceAndLocation = option.originalsExistenceAndLocation;
    this.relatedDescriptionUnits = option.relatedDescriptionUnits;
    this.relatedPublicationsInformation = option.relatedPublicationsInformation;
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
