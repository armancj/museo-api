import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { LocationSchema } from './location.schema';
import { LocationModel } from '../models/entry-and-location-record.model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { propTypeMongo } from '../../util/prop-type-mongo.function';

/**
 * Represents the record of an entry and its location.
 * This class contains metadata fields describing various properties related to heritage inventory and entry details.
 */
@Schema()
class EntryAndLocationRecord {
  @Prop(
    propTypeMongo({
      type: String,
      enum: HeritageType,
    }),
  )
  heritageType: FieldMetadata<HeritageType>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  declarationType: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  inventoryNumber: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
      enum: GenericClassification,
    }),
  )
  genericClassification: FieldMetadata<GenericClassification>;

  @Prop(
    propTypeMongo({
      type: Boolean,
    }),
  )
  pieceInventory: FieldMetadata<boolean>;

  @Prop(
    propTypeMongo({
      type: Boolean,
    }),
  )
  auxiliaryInventory: FieldMetadata<boolean>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  objectName: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  initialDescription: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: String,
    }),
  )
  entryMethod: FieldMetadata<string>;

  @Prop(
    propTypeMongo({
      type: Date,
    }),
  )
  entryDate: FieldMetadata<Date>;

  /**
   * The location details of the item.
   * @type {LocationModel}
   */
  @Prop({ type: LocationSchema })
  objectLocation: LocationModel;

  @Prop(
    propTypeMongo({
      type: String,
      enum: InstitutionType,
    }),
  )
  institutionType: FieldMetadata<InstitutionType>;
}

/**
 * EntryAndLocationRecordSchema is a schema object created using the SchemaFactory.
 * It represents the database schema for the EntryAndLocationRecord entity.
 * This schema is used for mapping and validating EntryAndLocationRecord-related data
 * when interacting with the database.
 */
export const EntryAndLocationRecordSchema = SchemaFactory.createForClass(
  EntryAndLocationRecord,
);
