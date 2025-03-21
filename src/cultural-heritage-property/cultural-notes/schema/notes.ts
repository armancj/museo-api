import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NotesModel } from '../models/cultural-notes-model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

/**
 * Mongoose schema definition for cultural notes.
 */
@Schema()
class Notes implements NotesModel {
  /**
   * Stores optional cultural notes or additional information.
   */
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  notes?: FieldMetadata<string>;
}

/**
 * Schema factory for creating the Mongoose schema for `Notes`.
 */
export const NotesSchema = SchemaFactory.createForClass(Notes);
