import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AssociatedDocumentationModel } from "../models/access-and-use-conditions";

@Schema()
class AssociatedDocumentation implements AssociatedDocumentationModel{

  @Prop()
  originalsExistenceAndLocation?: string;

  @Prop()
  copiesExistenceAndLocation: string;

  @Prop()
  relatedDescriptionUnits?: string;

  @Prop()
  relatedPublicationsInformation?: string;
}
export const AssociatedDocumentationSchema = SchemaFactory.createForClass(
  AssociatedDocumentation,
);
