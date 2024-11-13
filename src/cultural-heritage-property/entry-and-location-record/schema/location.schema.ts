import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LocationModel } from '../models/entry-and-location-record.model';

@Schema()
class Location implements LocationModel {
  @Prop()
  floor: string;

  @Prop()
  exhibitionRoom: string;

  @Prop()
  storage: string;

  @Prop()
  showcaseShelf: string;

  @Prop()
  shelfDrawer: string;

  @Prop()
  box: string;

  @Prop()
  fileFolder: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
