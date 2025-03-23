import { Module } from '@nestjs/common';
import { CulturalRecordService } from './cultural-record.service';
import { CulturalRecordController } from './cultural-record.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { CommonRecordService } from '../shared/common-record-service.service';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { CulturalRecordsEntity } from './entities/cultural-records.entity';
import { CulturalRecordEntity } from './entities/cultural-record.entity';
import { applyCommonHooksSchema } from '../field-review-status/schema/apply-common-hooks.schema';

/**
 * Module that manages cultural records, including volume quantities, dimensions, and other associated data.
 *
 * Provides the controller and service to handle cultural records within the schema,
 * as well as setting up the provider for `CommonRecordService` to interact with the cultural record data.
 */
@Module({
  imports: [
    /**
     * Imports the Mongoose module with the cultural heritage property schema.
     */
    MongooseModule.forFeatureAsync([
      {
        name: CulturalHeritagePropertyEntity,
        useFactory: () =>
          applyCommonHooksSchema(CulturalHeritagePropertySchema),
      },
    ]),
  ],
  controllers: [CulturalRecordController],
  providers: [
    /**
     * Provider for `CommonRecordService` configured for managing cultural records.
     *
     * The service is injected using a factory pattern with the cultural record, dimensions, and volume quantities models,
     * and is registered with the token `'CULTURAL_RECORD_SERVICE'`.
     */
    {
      provide: 'CULTURAL_RECORD_SERVICE',
      useFactory: (culturalRecordModel) =>
        new CommonRecordService(
          culturalRecordModel,
          CulturalRecordEntity,
          CulturalRecordsEntity,
          'culturalRecord',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
    /**
     * Service for handling the business logic of cultural records.
     */
    CulturalRecordService,
  ],
})
export class CulturalRecordModule {}
