import { Module } from '@nestjs/common';
import { InstitutionTypesModule } from './institution-types/institution-types.module';
import { InstitutionCategoriesModule } from './institution-categories/institution-categories.module';
import { MuseumTypesModule } from './museum-types/museum-types.module';
import { HeritageOfficesModule } from './heritage-offices/heritage-offices.module';

@Module({
  imports: [InstitutionTypesModule, InstitutionCategoriesModule, MuseumTypesModule, HeritageOfficesModule]
})
export class InstitutionsModule {}
