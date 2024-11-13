import { ProducerAuthorRecord } from '../models/producer-author-record.models';
import { IsNotEmpty } from 'class-validator';

export class CreateProducerAuthorRecordDto implements ProducerAuthorRecord {
  @String()
  @IsNotEmpty()
  betweenStreet1: string;

  @String()
  @IsNotEmpty()
  betweenStreet2: string;

  @String()
  @IsNotEmpty()
  district: string;

  @String()
  @IsNotEmpty()
  institutionalHistory: string;

  @String()
  @IsNotEmpty()
  locality: string;

  @String()
  @IsNotEmpty()
  municipality: string;

  @String()
  @IsNotEmpty()
  number: string;

  @String()
  @IsNotEmpty()
  objectEntryHistory: string;

  @String()
  @IsNotEmpty()
  producerAuthorNames: string;

  @String()
  @IsNotEmpty()
  province: string;

  @String()
  @IsNotEmpty()
  street: string;
}
