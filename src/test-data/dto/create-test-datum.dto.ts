import { IsNotEmpty } from 'class-validator';
import { TestDataModel } from '../model/test-data.model';
import { FieldMetadataDto } from '../field-review-status/dto/field-metadata.dto';

export class CreateTestDatumDto implements TestDataModel {
  @IsNotEmpty()
  name: FieldMetadataDto<string>;
}
