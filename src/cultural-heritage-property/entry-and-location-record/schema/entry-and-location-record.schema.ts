import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  GenericClassification,
  HeritageType,
} from '../enum/entry-and-location-record.enum';
import { InstitutionType } from '../../../address/institutions/enum/institutions.enum';
import { LocationSchema } from "./location.schema";
import { LocationModel } from "../models/entry-and-location-record.model";

@Schema()
class EntryAndLocationRecord {

  @Prop({ required: true, enum: HeritageType })
  heritageType: HeritageType;

  @Prop()
  declarationType: string;

  @Prop({ required: true })
  inventoryNumber: string;

  @Prop({ required: true, enum: GenericClassification })
  genericClassification: GenericClassification;

  @Prop()
  pieceInventory: boolean;

  @Prop()
  auxiliaryInventory: boolean;

  @Prop({ required: true })
  objectName: string;

  @Prop()
  initialDescription: string;

  @Prop()
  entryMethod: string;

  @Prop()
  entryDate: Date; // Date of entry

  @Prop({ type: LocationSchema })
  objectLocation: LocationModel;

  @Prop({ required: true, enum: InstitutionType })
  institutionType: InstitutionType;
}

export const EntryAndLocationRecordSchema = SchemaFactory.createForClass(EntryAndLocationRecord);