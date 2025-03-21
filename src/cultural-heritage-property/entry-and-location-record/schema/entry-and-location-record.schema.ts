import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { LocationSchema } from './location.schema';
import { LocationModel } from '../models/entry-and-location-record.model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Mongoose schema for Entry and Location Record.
 * @schema EntryAndLocationRecord
 */
@Schema()
class EntryAndLocationRecord {
  @Prop({
    type: {
      value: { type: String, enum: HeritageType },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  heritageType: FieldMetadata<HeritageType>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  declarationType: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
    required: true,
  })
  inventoryNumber: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String, enum: GenericClassification },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
    required: true,
  })
  genericClassification: FieldMetadata<GenericClassification>;

  @Prop({
    type: {
      value: { type: Boolean },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: Boolean, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  pieceInventory: FieldMetadata<boolean>;

  @Prop({
    type: {
      value: { type: Boolean },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: Boolean, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  auxiliaryInventory: FieldMetadata<boolean>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
    required: true,
  })
  objectName: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  initialDescription: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  entryMethod: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: Date },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: Date, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  entryDate: FieldMetadata<Date>;

  /**
   * The location details of the item.
   * @type {LocationModel}
   */
  @Prop({ type: LocationSchema })
  objectLocation: LocationModel;

  @Prop({
    type: {
      value: { type: String, enum: InstitutionType },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String, required: false },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  institutionType: FieldMetadata<InstitutionType>;
}

export const EntryAndLocationRecordSchema = SchemaFactory.createForClass(
  EntryAndLocationRecord,
);
