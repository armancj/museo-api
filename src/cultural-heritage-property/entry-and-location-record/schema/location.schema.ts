import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LocationModel } from '../models/entry-and-location-record.model';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * Mongoose schema for Location.
 * @schema Location
 */
@Schema()
class Location implements LocationModel {
  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  floor: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  exhibitionRoom: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  storage: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  showcaseShelf: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  shelfDrawer: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  box: FieldMetadata<string>;

  @Prop({
    type: {
      value: { type: String },
      status: { type: String, default: 'Pending' },
      history: {
        type: [
          {
            previousValue: { type: String },
            modifiedAt: { type: Date },
            comment: { type: String },
          },
        ],
        default: [],
      },
    },
  })
  fileFolder: FieldMetadata<string>;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
