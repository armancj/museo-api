import { forwardRef, Module } from '@nestjs/common';
import { CulturalNotesService } from './cultural-notes.service';
import { CulturalNotesController } from './cultural-notes.controller';
import { getModelToken } from '@nestjs/mongoose';
import { CulturalHeritagePropertyEntity } from '../cultural-heritage-property/Schema/cultural-heritage-property';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CulturalNoteEntity } from './entities/cultural-note.entity';
import { CulturalNotesEntity } from './entities/cultural-notes.entity';
import { CulturalHeritagePropertyModule } from '../cultural-heritage-property/cultural-heritage-property.module';

@Module({
  imports: [
    forwardRef(() => CulturalHeritagePropertyModule), // Usar forwardRef para evitar una dependencia circular
  ],
  controllers: [CulturalNotesController],
  exports: [CulturalNotesService],
  providers: [
    /**
     * Provider for `CommonRecordService` configured for managing associated documentation.
     *
     * The service is injected using a factory pattern with the cultural heritage property model,
     * and is registered with the token `'ASSOCIATED_DOCUMENTATION_SERVICE'`.
     */
    {
      provide: 'CULTURAL_NOTES_SERVICE',
      useFactory: culturalHeritagePropertyModel =>
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
