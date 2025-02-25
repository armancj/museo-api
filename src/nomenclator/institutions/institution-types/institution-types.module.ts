import { Module } from '@nestjs/common';
import { InstitutionTypesService } from './institution-types.service';
import { InstitutionTypesController } from './institution-types.controller';

@Module({
  controllers: [InstitutionTypesController],
  providers: [InstitutionTypesService],
})
export class InstitutionTypesModule {}
