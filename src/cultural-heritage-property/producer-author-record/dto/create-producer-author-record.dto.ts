import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProducerAuthorRecordDto
  implements ProducerAuthorRecordModel
{
  @IsString()
  @IsNotEmpty()
  betweenStreet1: string;

  @IsString()
  @IsNotEmpty()
  betweenStreet2: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsString()
  @IsNotEmpty()
  institutionalHistory: string;

  @IsString()
  @IsNotEmpty()
  locality: string;

  @IsString()
  @IsNotEmpty()
  municipality: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  objectEntryHistory: string;

  @IsString()
  @IsNotEmpty()
  producerAuthorNames: string;

  @IsString()
  @IsNotEmpty()
  province: string;

  @IsString()
  @IsNotEmpty()
  street: string;
}
