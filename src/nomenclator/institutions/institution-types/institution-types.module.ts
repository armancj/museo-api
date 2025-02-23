import { Module } from '@nestjs/common';
import { InstitutionTypesController } from './institution-types.controller';
import { InstitutionTypesService } from './institution-types.service';

@Module({
  controllers: [InstitutionTypesController],
  providers: [InstitutionTypesService]
})
export class InstitutionTypesModule {}
