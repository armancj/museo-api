import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
class ProducerAuthorRecord {
  @Prop()
  producerAuthorNames: string;

  @Prop()
  street: string;

  @Prop()
  number: string;

  @Prop()
  betweenStreet1: string;

  @Prop()
  betweenStreet2: string;

  @Prop()
  district: string;

  @Prop()
  locality: string;

  @Prop()
  municipality: string;

  @Prop()
  province: string;

  @Prop()
  institutionalHistory?: string;

  @Prop()
  objectEntryHistory?: string;
}

export const ProducerAuthorRecordSchema =
  SchemaFactory.createForClass(ProducerAuthorRecord);
