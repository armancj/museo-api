import { IsString } from 'class-validator';
import { TestDataModel } from '../model/test-data.model';

export class CreateTestDatumDto implements TestDataModel {
  @IsString()
  name: string;
}
