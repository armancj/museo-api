import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import {CountryPropertiesModel} from "../entities/country.model";
import { BaseSchema, BaseSchemaFactory } from "../../../common/schema/base.schema";

export type CountryDocument = HydratedDocument<Country>;
@Schema()
export class Country extends BaseSchema implements CountryPropertiesModel {
  @Prop({ required: true, unique: true})
  name: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
CountrySchema.add(BaseSchemaFactory);

export const CountryNameEntity = 'Country';
export type CountryMongoModel = Model<CountryDocument>;
