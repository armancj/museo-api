import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';
import { InstitutionPropertiesModel } from '../entities/institution.model';
import { Classification, InstitutionType } from '../enum/institutions.enum';

export type InstitutionDocument = HydratedDocument<Institution>;

@Schema()
export class Institution
  extends BaseSchema
  implements InstitutionPropertiesModel
{
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  betweenStreet1: string;

  @Prop({ required: true })
  betweenStreet2: string;

  @Prop({ required: false })
  category: string;

  @Prop({ required: false, enum: Classification })
  classification: Classification;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  district: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, enum: InstitutionType })
  institutionType: InstitutionType;

  @Prop({ required: true })
  locality: string;

  @Prop({ required: true })
  municipality: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  phone1: string;

  @Prop()
  phone2: string;

  @Prop({ required: true })
  province: string;

  @Prop({ required: true })
  referenceCode: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: false })
  typology: string;

  @Prop()
  website: string;
}

export const InstitutionSchema = SchemaFactory.createForClass(Institution);
InstitutionSchema.add(BaseSchemaFactory);

export const InstitutionNameEntity = 'Institution';
export type InstitutionMongoModel = Model<InstitutionDocument>;
