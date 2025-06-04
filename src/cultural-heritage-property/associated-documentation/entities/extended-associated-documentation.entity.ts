import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { AssociatedDocumentationEntity } from './associated-documentation.entity';

/**
 * Extended entity class for representing associated documentation with a UUID.
 *
 * Extends the base `AssociatedDocumentationEntity` by adding a UUID property.
 */
export class ExtendedAssociatedDocumentationEntity extends AssociatedDocumentationEntity {
  /**
   * Unique identifier for the associated documentation entity.
   *
   * @type {string}
   */
  uuid: string;

  /**
   * Constructor for creating an instance of `ExtendedAssociatedDocumentationEntity`.
   *
   * @param option Partial object containing associated documentation data and UUID.
   */
  constructor(
    option: Partial<AssociatedDocumentationModel & { uuid: string }>,
  ) {
    super(option);
    if (option.uuid) this.uuid = option.uuid;
  }

  /**
   * Factory method to create a new instance of `ExtendedAssociatedDocumentationEntity`.
   *
   * @param option Partial object containing associated documentation data and UUID.
   * @returns A new instance of `ExtendedAssociatedDocumentationEntity`.
   */
  static create(
    option: Partial<AssociatedDocumentationModel & { uuid: string }>,
  ): ExtendedAssociatedDocumentationEntity {
    return new ExtendedAssociatedDocumentationEntity(option);
  }
}
