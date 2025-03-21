import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Represents a record model for a producer or author with associated metadata.
 */
export interface ProducerAuthorRecordModel {
  producerAuthorNames: FieldMetadata<string>;
  street: FieldMetadata<string>;
  number: FieldMetadata<string>;
  betweenStreet1: FieldMetadata<string>;
  betweenStreet2: FieldMetadata<string>;
  district: FieldMetadata<string>;
  locality: FieldMetadata<string>;
  municipality: FieldMetadata<string>;
  province: FieldMetadata<string>;
  institutionalHistory?: FieldMetadata<string>;
  objectEntryHistory?: FieldMetadata<string>;
}
