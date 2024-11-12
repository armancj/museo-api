import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class AssociatedDocumentation {

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
