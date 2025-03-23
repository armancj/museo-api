import { TestDataModel } from '../model/test-data.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDto } from '../field-review-status/dto/field-metadata.dto';
import { FieldReviewStatusEntity } from '../field-review-status/entities/field-review-status.entity';

export class TestDatum {
  @ApiProperty({ type: () => FieldMetadataDto })
  test: FieldMetadataDto<string>;
  uuid: string;
  constructor(options: Partial<TestDataModel> = {}) {
    this.test = FieldReviewStatusEntity.create(options.name);
    this.uuid = (options as any).uuid;
  }
}
