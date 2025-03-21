import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Represents a model for associated documentation within a system.
 *
 * This interface provides metadata for various document-related fields.
 * It includes information about the existence and location of originals and copies,
 * as well as related description units and related publication information.
 *
 * Each field may include additional metadata details encapsulated within the FieldMetadata type.
 */
export interface AssociatedDocumentationModel {
  originalsExistenceAndLocation?: FieldMetadata<string>;
  copiesExistenceAndLocation: FieldMetadata<string>;
  relatedDescriptionUnits?: FieldMetadata<string>;
  relatedPublicationsInformation?: FieldMetadata<string>;
}
