import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryAndLocationRecordDto } from './create-entry-and-location-record.dto';

export class UpdateEntryAndLocationRecordDto extends PartialType(
  CreateEntryAndLocationRecordDto,
) {}
