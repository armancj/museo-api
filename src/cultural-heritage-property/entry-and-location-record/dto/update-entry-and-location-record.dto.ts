import { PartialType } from '@nestjs/swagger';
import { CreateEntryAndLocationRecordDto } from './create-entry-and-location-record.dto';

/**
 * DTO for updating an entry and location record.
 * Inherits all fields from CreateEntryAndLocationRecordDto, but makes them optional.
 */
export class UpdateEntryAndLocationRecordDto extends PartialType(CreateEntryAndLocationRecordDto) {}
