import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Represents a model for controlling and tracking description-related metadata.
 * This interface defines the structure for storing metadata of a description including
 * details about who made the description, when it was made, who reviewed it, and when it was reviewed.
 *
 * Properties:
 * - `descriptionMadeBy`: A `FieldMetadata` instance that contains metadata about the author of the description.
 * - `descriptionDateTime`: A `FieldMetadata` instance that holds the metadata about the timestamp when the description was created.
 * - `reviewedBy`: A `FieldMetadata` instance containing metadata of the reviewer who reviewed the description.
 * - `reviewDateTime`: A `FieldMetadata` instance storing metadata about the timestamp of the review.
 */
export interface DescriptionControlModel {
  descriptionMadeBy: FieldMetadata<string>;
  descriptionDateTime: FieldMetadata<Date>;
  reviewedBy: FieldMetadata<string>;
  reviewDateTime: FieldMetadata<Date>;
}
