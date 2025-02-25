import { Module } from '@nestjs/common';
import { MuseumTypesService } from './museum-types.service';
import { MuseumTypesController } from './museum-types.controller';

@Module({
  controllers: [MuseumTypesController],
  providers: [MuseumTypesService],
})
export class MuseumTypesModule {}
