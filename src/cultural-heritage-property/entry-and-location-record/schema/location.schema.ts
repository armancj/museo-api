import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LocationModel } from '../models/entry-and-location-record.model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

/**
 * Mongoose schema for Location.
 * @schema Location
 */
@Schema()
class Location implements LocationModel {
  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  floor: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  exhibitionRoom: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  storage: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  showcaseShelf: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  shelfDrawer: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  box: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  fileFolder: FieldMetadata<string>;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
