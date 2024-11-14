import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NotesModel } from '../models/cultural-notes-model';

/**
 * Mongoose schema definition for cultural notes.
 */
@Schema()
class Notes implements NotesModel {
  /**
   * Stores optional cultural notes or additional information.
   */
  @Prop()
  notes?: string;
}

/**
 * Schema factory for creating the Mongoose schema for `Notes`.
 */
export const NotesSchema = SchemaFactory.createForClass(Notes);
