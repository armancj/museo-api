import { forwardRef, Module } from '@nestjs/common';
import { ProducerAuthorRecordService } from './producer-author-record.service';
import { ProducerAuthorRecordController } from './producer-author-record.controller';
import { CulturalHeritagePropertyModule } from '../cultural-heritage-property/cultural-heritage-property.module';
import {CommonRecordService} from "../shared/common-record-service.service";
import {getModelToken} from "@nestjs/mongoose";
import {CulturalHeritagePropertyEntity} from "../cultural-heritage-property/Schema/cultural-heritage-property";
import {ProducerAuthorRecords} from "./entities/producer-author-records.entity";
import {ProducerAuthorRecord} from "./entities/producer-author-record.entity";

@Module({
  imports: [
    forwardRef(() => CulturalHeritagePropertyModule), // Usar forwardRef para evitar una dependencia circular
  ],
  controllers: [ProducerAuthorRecordController],
  providers: [
      ProducerAuthorRecordService,

    {
      /**
       * Provider for `CommonRecordService` configured for managing access and use conditions.
       *
       * The service is injected using a factory pattern with the cultural heritage property model,
       * and is registered with the token `'ACCESS_AND_USE_CONDITIONS_SERVICE'`.
       */
      provide: 'PRODUCER_AUTHOR_RECORD_SERVICE',
      useFactory: (producerAuthorRecordModel) =>
          new CommonRecordService(
              producerAuthorRecordModel,
              ProducerAuthorRecord,
              ProducerAuthorRecords,
              'producerAuthor',
          ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    }
  ],
})
export class ProducerAuthorRecordModule {}
