import { Module } from '@nestjs/common';
import { MuseumTypesController } from './museum-types.controller';
import { MuseumTypesService } from './museum-types.service';

@Module({
  controllers: [MuseumTypesController],
  providers: [MuseumTypesService]
})
export class MuseumTypesModule {}
