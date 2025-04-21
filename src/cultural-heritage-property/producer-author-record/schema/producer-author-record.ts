import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

@Schema()
class ProducerAuthorRecord implements ProducerAuthorRecordModel {
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  producerAuthorNames: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  street: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  number: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  betweenStreet1: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  betweenStreet2: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  district: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  locality: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  municipality: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  province: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  institutionalHistory?: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  objectEntryHistory?: FieldMetadata<string>;
}

export const ProducerAuthorRecordSchema =
  SchemaFactory.createForClass(ProducerAuthorRecord);
