import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { LocationSchema } from './location.schema';
import { LocationModel } from '../models/entry-and-location-record.model';

/**
 * Mongoose schema for Entry and Location Record.
 * @schema EntryAndLocationRecord
 */
@Schema()
class EntryAndLocationRecord {
  /**
   * The heritage type of the item.
   * @type {HeritageType}
   */
  @Prop({ required: true, enum: HeritageType })
  heritageType: HeritageType;

  /**
   * The type of declaration.
   * @type {string}
   */
  @Prop()
  declarationType: string;

  /**
   * The inventory number of the item.
   * @type {string}
   */
  @Prop({ required: true })
  inventoryNumber: string;

  /**
   * The generic classification of the item.
   * @type {GenericClassification}
   */
  @Prop({ required: true, enum: GenericClassification })
  genericClassification: GenericClassification;

  /**
   * Indicates if the item is in the piece inventory.
   * @type {boolean}
   */
  @Prop()
  pieceInventory: boolean;

  /**
   * Indicates if the item is in the auxiliary inventory.
   * @type {boolean}
   */
  @Prop()
  auxiliaryInventory: boolean;

  /**
   * The name of the object.
   * @type {string}
   */
  @Prop({ required: true })
  objectName: string;

  /**
   * A brief initial description of the item.
   * @type {string}
   */
  @Prop()
  initialDescription: string;

  /**
   * The method of entry.
   * @type {string}
   */
  @Prop()
  entryMethod: string;

  /**
   * The entry date.
   * @type {Date}
   */
  @Prop()
  entryDate: Date;

  /**
   * The location details of the item.
   * @type {LocationModel}
   */
  @Prop({ type: LocationSchema })
  objectLocation: LocationModel;

  /**
   * The type of institution.
   * @type {InstitutionType}
   */
  @Prop({ required: true, enum: InstitutionType })
  institutionType: InstitutionType;
}

export const EntryAndLocationRecordSchema = SchemaFactory.createForClass(
  EntryAndLocationRecord,
);
