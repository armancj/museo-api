import { Module } from '@nestjs/common';
import { CulturalNotesService } from './cultural-notes.service';
import { CulturalNotesController } from './cultural-notes.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import {
  CulturalHeritagePropertyEntity,
  CulturalHeritagePropertySchema,
} from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CulturalNoteEntity } from './entities/cultural-note.entity';
import { CulturalNotesEntity } from './entities/cultural-notes.entity';
import { applyCommonHooksSchema } from '../field-review-status/schema/apply-common-hooks.schema';

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
  controllers: [CulturalNotesController],
  providers: [
    /**
     * Provider for `CommonRecordService` configured for managing associated documentation.
     *
     * The service is injected using a factory pattern with the cultural heritage property model,
     * and is registered with the token `'ASSOCIATED_DOCUMENTATION_SERVICE'`.
     */
    {
      provide: 'CULTURAL_NOTES_SERVICE',
      useFactory: (culturalHeritagePropertyModel) =>
        new CommonRecordService(
          culturalHeritagePropertyModel,
          CulturalNoteEntity,
          CulturalNotesEntity,
          'notes',
        ),
      inject: [getModelToken(CulturalHeritagePropertyEntity)],
    },
    /**
     * Service for handling the business logic of associated documentation.
     */
    CulturalNotesService,
  ],
})
export class CulturalNotesModule {}
