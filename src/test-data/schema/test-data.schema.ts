import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

import { TestDataModel } from '../model/test-data.model';
import { BaseSchema, BaseSchemaFactory } from '../../common/schema/base.schema';
import { propTypeMongo } from '../../cultural-heritage-property/util/prop-type-mongo.function';
import { FieldMetadata } from '../field-review-status/models/field-review-status.model';

export type TestDataDocument = HydratedDocument<TestData>;

@Schema()
export class TestData extends BaseSchema implements TestDataModel {
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  name: FieldMetadata<string>;
}

export const TestDataSchema = SchemaFactory.createForClass(TestData);

TestDataSchema.add(BaseSchemaFactory);

export const TestDataNameEntity = 'test-data';
export type TestDataMongoModel = Model<TestDataDocument>;
