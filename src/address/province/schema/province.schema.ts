import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ProvincePropertiesModel } from '../entities/province.model';
import { BaseSchema, BaseSchemaFactory } from "../../../common/schema/base.schema";

export type ProvinceDocument = HydratedDocument<Province>;
@Schema()
export class Province extends BaseSchema implements ProvincePropertiesModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  country: string;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
ProvinceSchema.add(BaseSchemaFactory);

export const ProvinceNameEntity = 'Province';
export type ProvinceMongoModel = Model<ProvinceDocument>;
