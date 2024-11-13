import { PartialType } from '@nestjs/mapped-types';
import { CreateCulturalRecordDto } from './create-cultural-record.dto';

export class UpdateCulturalRecordDto extends PartialType(
  CreateCulturalRecordDto,
) {}
