import { PartialType } from '@nestjs/swagger';
import { CreateTestDatumDto } from './create-test-datum.dto';

export class UpdateTestDatumDto extends PartialType(CreateTestDatumDto) {}
