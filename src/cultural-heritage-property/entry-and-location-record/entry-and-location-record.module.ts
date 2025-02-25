import { Module } from '@nestjs/common';
import { EntryAndLocationRecordService } from './entry-and-location-record.service';
import { EntryAndLocationRecordController } from './entry-and-location-record.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { CommonRecordService } from '../shared/common-record-service.service';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { EntryAndLocationRecord } from './entities/entry-and-location-record.entity';
import { EntryAndLocationRecordsEntity } from './entities/entry-and-location-records.entity';

/**
 * Module that manages entry and location records.
 *
 * Provides the controller and service to handle entry and location records within the schema,
 * as well as setting up the provider for `CommonRecordService` to interact with the entry and location record data.
 */
@Module({
  imports: [
    /**
     * Imports the Mongoose module with the cultural heritage property schema.
     */
    MongooseModule.forFeature([
      {
        name: CulturalHeritagePropertyEntity,
        schema: CulturalHeritagePropertySchema,
      },
    ]),
  ],
  controllers: [EntryAndLocationRecordController],
  providers: [
    /**
     * Provider for `CommonRecordService` configured for managing entry and location records.
     *
     * The service is injected using a factory pattern with the entry and location record model,
     * and is registered with the token `'ENTRY_AND_LOCATION_RECORD_SERVICE'`.
     */
    {
      provide: 'ENTRY_AND_LOCATION_RECORD_SERVICE',
      useFactory: (entryAndLocationRecordModel) =>
        new CommonRecordService(
          entryAndLocationRecordModel,
          EntryAndLocationRecord,
          EntryAndLocationRecordsEntity,
          'entryAndLocation',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
    /**
     * Service for handling the business logic of entry and location records.
     */
    EntryAndLocationRecordService,
  ],
})
export class EntryAndLocationRecordModule {}
