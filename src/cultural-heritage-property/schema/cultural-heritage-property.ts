import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ProducerAuthorRecord } from '../producer-author-record/models/producer-author-record.models';
import { ProducerAuthorRecordSchema } from '../producer-author-record/schema/producer-author-record';
import { BaseSchema, BaseSchemaFactory } from '../../common/schema/base.schema';

export type CulturalHeritagePropertyDocument =
  HydratedDocument<CulturalHeritageProperty>;

@Schema()
export class CulturalHeritageProperty extends BaseSchema {
  @Prop({ type: ProducerAuthorRecordSchema })
  producerAuthor: ProducerAuthorRecord;
  // Añade aquí las otras propiedades de CulturalPropertiesModel implementadas
}

export const CulturalHeritagePropertySchema = SchemaFactory.createForClass(
  CulturalHeritageProperty,
);
CulturalHeritagePropertySchema.add(BaseSchemaFactory);

export const CulturalHeritagePropertyEntity = 'CulturalHeritageProperty';
export type CulturalHeritagePropertyModel =
  Model<CulturalHeritagePropertyDocument>;
