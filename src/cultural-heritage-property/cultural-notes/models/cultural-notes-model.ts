import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Interface representing the data model for cultural notes.
 */
export interface NotesModel {
  /**
   * Optional field for storing cultural notes or additional information.
   */
  notes?: FieldMetadata<string>;
}
