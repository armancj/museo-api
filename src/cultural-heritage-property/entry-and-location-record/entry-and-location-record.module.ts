import { Module } from '@nestjs/common';
import { EntryAndLocationRecordService } from './entry-and-location-record.service';
import { EntryAndLocationRecordController } from './entry-and-location-record.controller';

@Module({
  controllers: [EntryAndLocationRecordController],
  providers: [EntryAndLocationRecordService],
})
export class EntryAndLocationRecordModule {}
