import { Module } from '@nestjs/common';
import { DescriptionUnitsService } from './description-units.service';
import { DescriptionUnitsController } from './description-units.controller';

@Module({
  controllers: [DescriptionUnitsController],
  providers: [DescriptionUnitsService],
})
export class DescriptionUnitsModule {}
