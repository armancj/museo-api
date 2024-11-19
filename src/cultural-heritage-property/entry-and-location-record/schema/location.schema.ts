import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LocationModel } from '../models/entry-and-location-record.model';

/**
 * Mongoose schema for Location.
 * @schema Location
 */
@Schema()
class Location implements LocationModel {
  /**
   * The floor where the item is located.
   * @type {string}
   */
  @Prop()
  floor: string;

  /**
   * The exhibition room where the item is displayed.
   * @type {string}
   */
  @Prop()
  exhibitionRoom: string;

  /**
   * The storage area where the item is kept.
   * @type {string}
   */
  @Prop()
  storage: string;

  /**
   * The showcase shelf where the item is exhibited.
   * @type {string}
   */
  @Prop()
  showcaseShelf: string;

  /**
   * The shelf drawer where the item is stored.
   * @type {string}
   */
  @Prop()
  shelfDrawer: string;

  /**
   * The box where the item is kept.
   * @type {string}
   */
  @Prop()
  box: string;

  /**
   * The file folder where the item is archived.
   * @type {string}
   */
  @Prop()
  fileFolder: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
