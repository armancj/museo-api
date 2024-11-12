import { Module } from '@nestjs/common';
import { EntryAndLocationRecordModule } from './entry-and-location-record/entry-and-location-record.module';
import { ProducerAuthorRecordModule } from './producer-author-record/producer-author-record.module';
import { CulturalRecordModule } from './cultural-record/cultural-record.module';

@Module({
  imports: [
    EntryAndLocationRecordModule,
    ProducerAuthorRecordModule,
    CulturalRecordModule,
  ],
})
export class CulturalHeritagePropertyModule {}
