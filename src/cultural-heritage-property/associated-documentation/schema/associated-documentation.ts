import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AssociatedDocumentationModel } from '../models/associated-documentation-model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

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
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  originalsExistenceAndLocation?: FieldMetadata<string>;

  /**
   * The existence and location of copies.
   *
   * This field is required.
   * @type {string}
   */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  copiesExistenceAndLocation: FieldMetadata<string>;

  /**
   * Information about related description units.
   *
   * This field is optional.
   * @type {string}
   */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  relatedDescriptionUnits?: FieldMetadata<string>;

  /**
   * Information regarding related publications.
   *
   * This field is optional.
   * @type {string}
   */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  relatedPublicationsInformation?: FieldMetadata<string>;
}

/**
 * Mongoose schema definition for the `AssociatedDocumentation` class.
 */
export const AssociatedDocumentationSchema = SchemaFactory.createForClass(
  AssociatedDocumentation,
);
