import { MunicipalityPropertiesModel } from '../entities/municipality.model';
import { HydratedDocument, Model } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type MunicipalitiesDocument = HydratedDocument<Municipalities>;
@Schema()
export class Municipalities
  extends BaseSchema
  implements MunicipalityPropertiesModel
{
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  province: string;
}

export const MunicipalitiesSchema =
  SchemaFactory.createForClass(Municipalities);
MunicipalitiesSchema.add(BaseSchemaFactory);

export const MunicipalitiesNameEntity = 'Municipalities';
export type MunicipalitiesMongoModel = Model<MunicipalitiesDocument>;
