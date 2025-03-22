import { TestDataModel } from '../model/test-data.model';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadataDto } from '../field-review-status/dto/field-metadata.dto';

export class TestDatum {
  @ApiProperty({ type: () => FieldMetadataDto })
  test: FieldMetadataDto<string>;

  constructor(options: Partial<TestDataModel> = {}) {
    this.test = options.name;
  }
}
