import { Module } from '@nestjs/common';
import { CulturalRecordService } from './cultural-record.service';
import { CulturalRecordController } from './cultural-record.controller';

@Module({
  controllers: [CulturalRecordController],
  providers: [CulturalRecordService],
})
export class CulturalRecordModule {}
