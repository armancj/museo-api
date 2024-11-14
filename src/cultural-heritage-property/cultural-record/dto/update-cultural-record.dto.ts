import { PartialType } from '@nestjs/swagger';
import { CreateCulturalRecordDto } from './create-cultural-record.dto';

export class UpdateCulturalRecordDto extends PartialType(
  CreateCulturalRecordDto,
) {}
