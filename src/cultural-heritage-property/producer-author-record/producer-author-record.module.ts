import { forwardRef, Module } from '@nestjs/common';
import { ProducerAuthorRecordService } from './producer-author-record.service';
import { ProducerAuthorRecordController } from './producer-author-record.controller';
import { CulturalHeritagePropertyModule } from '../cultural-heritage-property/cultural-heritage-property.module';

@Module({
  imports: [
    forwardRef(() => CulturalHeritagePropertyModule), // Usar forwardRef para evitar una dependencia circular
  ],
  controllers: [ProducerAuthorRecordController],
  providers: [ProducerAuthorRecordService],
})
export class ProducerAuthorRecordModule {}
