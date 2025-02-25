import { Module } from '@nestjs/common';
import { ProducerAuthorRecordService } from './producer-author-record.service';
import { ProducerAuthorRecordController } from './producer-author-record.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CulturalHeritagePropertyEntity,
        schema: CulturalHeritagePropertySchema,
      },
    ]),
  ],
  controllers: [ProducerAuthorRecordController],
  providers: [ProducerAuthorRecordService],
})
export class ProducerAuthorRecordModule {}
