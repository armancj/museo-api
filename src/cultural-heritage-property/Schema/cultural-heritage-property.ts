import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ProducerAuthorRecord } from '../producer-author-record/models/producer-author-record.models';
import { ProducerAuthorRecordSchema } from '../producer-author-record/schema/producer-author-record';
import { BaseSchema, BaseSchemaFactory } from '../../common/schema/base.schema';
import { AccessAndUseConditionsSchema } from '../access-and-use-conditions/schema/access-and-use-conditions';
import { AssociatedDocumentationSchema } from '../access-and-use-conditions/schema/associated-documentation';
import {
  AccessAndUseConditionsModel,
  AssociatedDocumentationModel,
  DescriptionControlModel,
  NotesModel,
} from '../access-and-use-conditions/models/access-and-use-conditions';
import { DescriptionControlSchema } from '../access-and-use-conditions/schema/description-control';
import { NotesSchema } from '../access-and-use-conditions/schema/notes';
import { CulturalRecordSchema } from "../cultural-record/Schema/cultural-record";
import { CulturalRecordModel } from "../cultural-record/models/cultural-record";
import { EntryAndLocationRecordSchema } from "../entry-and-location-record/schema/entry-and-location-record.schema";
import { EntryAndLocationRecordModel } from "../entry-and-location-record/models/entry-and-location-record.model";

export type CulturalHeritagePropertyDocument =
  HydratedDocument<CulturalHeritageProperty>;

@Schema()
export class CulturalHeritageProperty extends BaseSchema {
  @Prop({ type: EntryAndLocationRecordSchema })
  entryAndLocation: EntryAndLocationRecordModel;

  @Prop({ type: ProducerAuthorRecordSchema })
  producerAuthor: ProducerAuthorRecord;

  @Prop({ type: CulturalRecordSchema })
  culturalRecord: CulturalRecordModel;

  @Prop({ type: AccessAndUseConditionsSchema })
  accessAndUseConditions: AccessAndUseConditionsModel;

  @Prop({ type: AssociatedDocumentationSchema })
  associatedDocumentation: AssociatedDocumentationModel;

  @Prop({ type: DescriptionControlSchema })
  descriptionControl: DescriptionControlModel;

  @Prop({ type: NotesSchema })
  notes: NotesModel;
}

export const CulturalHeritagePropertySchema = SchemaFactory.createForClass(
  CulturalHeritageProperty,
);
CulturalHeritagePropertySchema.add(BaseSchemaFactory);

export const CulturalHeritagePropertyEntity = 'CulturalHeritageProperty';
export type CulturalHeritagePropertyModel =
  Model<CulturalHeritagePropertyDocument>;
