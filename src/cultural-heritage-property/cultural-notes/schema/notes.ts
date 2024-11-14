import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {NotesModel} from "../models/cultural-notes-model";

@Schema()
class Notes implements NotesModel{
  @Prop() notes?: string;
}
export const NotesSchema = SchemaFactory.createForClass(Notes);
