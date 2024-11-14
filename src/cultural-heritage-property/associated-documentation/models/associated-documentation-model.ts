/**
 * Interface representing the structure of associated documentation data.
 */
export interface AssociatedDocumentationModel {
  /**
   * Indicates the existence and location of original documents.
   *
   * This property is optional.
   * @type {string}
   */
  originalsExistenceAndLocation?: string;

  /**
   * Indicates the existence and location of copies.
   *
   * This property is required.
   * @type {string}
   */
  copiesExistenceAndLocation: string;

  /**
   * Provides information about related description units.
   *
   * This property is optional.
   * @type {string}
   */
  relatedDescriptionUnits?: string;

  /**
   * Contains information about related publications.
   *
   * This property is optional.
   * @type {string}
   */
  relatedPublicationsInformation?: string;
}
