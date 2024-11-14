import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AssociatedDocumentationModel } from '../models/associated-documentation-model';

/**
 * Mongoose schema class for associated documentation.
 *
 * Represents the associated documentation details stored in the database.
 */
@Schema()
class AssociatedDocumentation implements AssociatedDocumentationModel {
  /**
   * The existence and location of original documents.
   *
   * This field is optional.
   * @type {string}
   */
  @Prop()
  originalsExistenceAndLocation?: string;

  /**
   * The existence and location of copies.
   *
   * This field is required.
   * @type {string}
   */
  @Prop()
  copiesExistenceAndLocation: string;

  /**
   * Information about related description units.
   *
   * This field is optional.
   * @type {string}
   */
  @Prop()
  relatedDescriptionUnits?: string;

  /**
   * Information regarding related publications.
   *
   * This field is optional.
   * @type {string}
   */
  @Prop()
  relatedPublicationsInformation?: string;
}

/**
 * Mongoose schema definition for the `AssociatedDocumentation` class.
 */
export const AssociatedDocumentationSchema = SchemaFactory.createForClass(
  AssociatedDocumentation,
);
