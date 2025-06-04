import { ProducerAuthorRecordModel } from '../models/producer-author-record.models';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
import { FieldMetadataDtoForString } from '../../field-review-status/dto/field-metadata-string.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProducerAuthorRecord implements ProducerAuthorRecordModel {
  @ApiProperty({ type: () => FieldMetadataDtoForString })
  betweenStreet1: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  betweenStreet2: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  district: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  institutionalHistory: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  locality: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  municipality: FieldMetadata<string>;

  @ApiProperty({ type: FieldMetadataDtoForString })
  number: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  objectEntryHistory: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  producerAuthorNames: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  province: FieldMetadata<string>;

  @ApiProperty({ type: () => FieldMetadataDtoForString })
  street: FieldMetadata<string>;

  constructor(option: Partial<ProducerAuthorRecordModel>) {
    if (option.betweenStreet1)
      this.betweenStreet1 = FieldReviewStatusEntity.create(
        option.betweenStreet1,
      );
    if (option.betweenStreet2)
      this.betweenStreet2 = FieldReviewStatusEntity.create(
        option.betweenStreet2,
      );
    if (option.district)
      this.district = FieldReviewStatusEntity.create(option.district);
    if (option.institutionalHistory)
      this.institutionalHistory = FieldReviewStatusEntity.create(
        option.institutionalHistory,
      );
    if (option.locality)
      this.locality = FieldReviewStatusEntity.create(option.locality);
    if (option.municipality)
      this.municipality = FieldReviewStatusEntity.create(option.municipality);
    if (option.number)
      this.number = FieldReviewStatusEntity.create(option.number);
    if (option.objectEntryHistory)
      this.objectEntryHistory = FieldReviewStatusEntity.create(
        option.objectEntryHistory,
      );
    if (option.producerAuthorNames)
      this.producerAuthorNames = FieldReviewStatusEntity.create(
        option.producerAuthorNames,
      );
    if (option.province)
      this.province = FieldReviewStatusEntity.create(option.province);
    if (option.street)
      this.street = FieldReviewStatusEntity.create(option.street);
  }

  static create(option: ProducerAuthorRecordModel): ProducerAuthorRecord {
    return new ProducerAuthorRecord(option);
  }
}
