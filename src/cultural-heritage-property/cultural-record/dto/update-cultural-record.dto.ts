import { PartialType } from '@nestjs/swagger';
import { CreateCulturalRecordDto } from './create-cultural-record.dto';

/**
 * Data Transfer Object for updating a cultural record.
 *
 * This DTO allows updating cultural records by providing partial properties
 * from `CreateCulturalRecordDto`, making them optional for flexibility in updates.
 */
export class UpdateCulturalRecordDto extends PartialType(
  CreateCulturalRecordDto,
) {}
