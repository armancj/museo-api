import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDtoForStringWithoutHistory } from '../../field-review-status/dto/create.dto';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

export class CreateProducerAuthorRecordDto
  implements ProducerAuthorRecordModel
{
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  betweenStreet1: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  betweenStreet2: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  district: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  institutionalHistory: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  locality: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  municipality: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  number: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  objectEntryHistory: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  producerAuthorNames: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  province: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  street: FieldMetadata<string>;
}
