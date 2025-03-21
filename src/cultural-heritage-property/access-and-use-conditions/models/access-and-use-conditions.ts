import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Represents the model for access and use conditions of a resource, including
 * access conditions, reproduction conditions, and any technical requirements.
 */
export interface AccessAndUseConditionsModel {
  accessConditions: FieldMetadata<string[]>;
  reproductionConditions: FieldMetadata<string[]>;
  technicalRequirements: FieldMetadata<string>;
}
