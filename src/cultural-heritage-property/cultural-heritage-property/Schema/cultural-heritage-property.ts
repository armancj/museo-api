import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ProducerAuthorRecordModel } from '../../producer-author-record/models/producer-author-record.models';
import { ProducerAuthorRecordSchema } from '../../producer-author-record/schema/producer-author-record';
import { BaseSchema, BaseSchemaFactory } from '../../../common/schema/base.schema';
import {
  AccessAndUseConditionsSchema,
} from '../../access-and-use-conditions/schema';
import {
  AccessAndUseConditionsModel,
} from '../../access-and-use-conditions/models/access-and-use-conditions';
import { CulturalRecordSchema } from '../../cultural-record/Schema';
import { CulturalRecordModel } from '../../cultural-record/models/cultural-record';
import { EntryAndLocationRecordSchema } from '../../entry-and-location-record/schema/entry-and-location-record.schema';
import { EntryAndLocationRecordModel } from '../../entry-and-location-record/models/entry-and-location-record.model';
import { Type } from 'class-transformer';
import {
  Institution,
  InstitutionNameEntity,
} from '../../../address/institutions/schema/institution.schema';
import {AssociatedDocumentationSchema} from "../../associated-documentation/schema/associated-documentation";
import {AssociatedDocumentationModel} from "../../associated-documentation/models/associated-documentation-model";
import {DescriptionControlSchema} from "../../description-control/schema/description-control";
import {DescriptionControlModel} from "../../description-control/models/description-control-model";
import {NotesSchema} from "../../cultural-notes/schema/notes";
import {NotesModel} from "../../cultural-notes/models/cultural-notes-model";

export type CulturalHeritagePropertyDocument =
  HydratedDocument<CulturalHeritageProperty>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class CulturalHeritageProperty extends BaseSchema {
  @Prop({ type: EntryAndLocationRecordSchema })
  entryAndLocation: EntryAndLocationRecordModel;

  @Prop({ type: ProducerAuthorRecordSchema, default: undefined })
  producerAuthor: ProducerAuthorRecordModel;

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

  @Prop()
  InstitutionId: string;

  @Type(() => Institution)
  institution: Institution;
}

export const CulturalHeritagePropertySchema = SchemaFactory.createForClass(
  CulturalHeritageProperty,
);

CulturalHeritagePropertySchema.virtual('institution', {
  ref: InstitutionNameEntity,
  localField: 'InstitutionId',
  foreignField: 'uuid',
  justOne: true,
});

CulturalHeritagePropertySchema.add(BaseSchemaFactory);

export const CulturalHeritagePropertyEntity = 'CulturalHeritageProperty';
export type CulturalHeritagePropertyModel =
  Model<CulturalHeritagePropertyDocument>;
