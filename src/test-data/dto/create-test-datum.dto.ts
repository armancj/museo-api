import { ValidateNested } from 'class-validator';
import { TestDataModel } from '../model/test-data.model';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { FieldMetadata } from '../../cultural-heritage-property/field-review-status/models/field-review-status.model';
import { FieldMetadataDtoForStringWithoutHistory } from '../../cultural-heritage-property/field-review-status/dto/create.dto';

export class CreateTestDatumDto implements TestDataModel {
  @ApiProperty({ type: () => FieldMetadataDtoForStringWithoutHistory })
  @Type(() => FieldMetadataDtoForStringWithoutHistory)
  @ValidateNested()
  name: FieldMetadata<string>;
}
