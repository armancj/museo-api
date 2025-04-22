import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { CategoryMuseumModel } from '../model/category-museum.model';
import {
  BaseSchema,
  BaseSchemaFactory,
} from '../../../common/schema/base.schema';

export type CategoryMuseumDocument = HydratedDocument<CategoryMuseum>;

@Schema({})
export class CategoryMuseum extends BaseSchema implements CategoryMuseumModel {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ default: true })
  active: boolean;
}

export const CategoryMuseumSchema =
  SchemaFactory.createForClass(CategoryMuseum);
CategoryMuseumSchema.add(BaseSchemaFactory);

export const CategoryMuseumNameEntity = 'category-museums';
export type CategoryMuseumMongoModel = Model<CategoryMuseumDocument>;
