import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {AssociatedDocumentationModel} from "../models/associated-documentation-model";
@Schema()
class AssociatedDocumentation implements AssociatedDocumentationModel {
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
