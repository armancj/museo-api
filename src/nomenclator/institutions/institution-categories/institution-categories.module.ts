import { Module } from '@nestjs/common';
import { InstitutionCategoriesController } from './institution-categories.controller';
import { InstitutionCategoriesService } from './institution-categories.service';

@Module({
  controllers: [InstitutionCategoriesController],
  providers: [InstitutionCategoriesService]
})
export class InstitutionCategoriesModule {}
