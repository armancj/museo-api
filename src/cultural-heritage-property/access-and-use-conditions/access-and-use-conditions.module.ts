import { Module } from '@nestjs/common';
import { AccessAndUseConditionsService } from './access-and-use-conditions.service';
import { AccessAndUseConditionsController } from './access-and-use-conditions.controller';

@Module({
  controllers: [AccessAndUseConditionsController],
  providers: [AccessAndUseConditionsService],
})
export class AccessAndUseConditionsModule {}
