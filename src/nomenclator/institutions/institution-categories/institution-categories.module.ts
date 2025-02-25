import { Module } from '@nestjs/common';
import { InstitutionCategoriesService } from './institution-categories.service';
import { InstitutionCategoriesController } from './institution-categories.controller';

@Module({
  controllers: [InstitutionCategoriesController],
  providers: [InstitutionCategoriesService],
})
export class InstitutionCategoriesModule {}
