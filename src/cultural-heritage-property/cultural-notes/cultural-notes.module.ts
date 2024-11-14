import { Module } from '@nestjs/common';
import { CulturalNotesService } from './cultural-notes.service';
import { CulturalNotesController } from './cultural-notes.controller';

@Module({
  controllers: [CulturalNotesController],
  providers: [CulturalNotesService],
})
export class CulturalNotesModule {}
