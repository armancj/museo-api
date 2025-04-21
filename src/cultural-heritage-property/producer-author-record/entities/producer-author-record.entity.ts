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
    this.betweenStreet1 = FieldReviewStatusEntity.create(option.betweenStreet1);
    this.betweenStreet2 = FieldReviewStatusEntity.create(option.betweenStreet2);
    this.district = FieldReviewStatusEntity.create(option.district);
    this.institutionalHistory = FieldReviewStatusEntity.create(
      option.institutionalHistory,
    );
    this.locality = FieldReviewStatusEntity.create(option.locality);
    this.municipality = FieldReviewStatusEntity.create(option.municipality);
    this.number = FieldReviewStatusEntity.create(option.number);
    this.objectEntryHistory = FieldReviewStatusEntity.create(
      option.objectEntryHistory,
    );
    this.producerAuthorNames = FieldReviewStatusEntity.create(
      option.producerAuthorNames,
    );
    this.province = FieldReviewStatusEntity.create(option.province);
    this.street = FieldReviewStatusEntity.create(option.street);
  }

  static create(option: ProducerAuthorRecordModel): ProducerAuthorRecord {
    return new ProducerAuthorRecord(option);
  }
}
