import { Module } from '@nestjs/common';
import { ProducerAuthorRecordService } from './producer-author-record.service';
import { ProducerAuthorRecordController } from './producer-author-record.controller';

@Module({
  controllers: [ProducerAuthorRecordController],
  providers: [ProducerAuthorRecordService],
})
export class ProducerAuthorRecordModule {}
