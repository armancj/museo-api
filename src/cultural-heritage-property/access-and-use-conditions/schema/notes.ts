import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class Notes {
  @Prop() notes?: string;
}
export const NotesSchema = SchemaFactory.createForClass(Notes);
