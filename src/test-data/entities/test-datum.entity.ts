import { TestDataModel } from '../model/test-data.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldReviewStatusEntity } from '../../cultural-heritage-property/field-review-status/entities/field-review-status.entity';
import { FieldMetadata } from '../../cultural-heritage-property/field-review-status/models/field-review-status.model';
import { FieldMetadataDtoForString } from '../../cultural-heritage-property/field-review-status/dto/field-metadata-string.dto';

export class TestDatum {
  @ApiProperty({ type: FieldMetadataDtoForString })
  test: FieldMetadata<string>;
  uuid: string;
  constructor(options: Partial<TestDataModel> = {}) {
    this.test = FieldReviewStatusEntity.create(options.name);
    this.uuid = (options as any).uuid;
  }
}
