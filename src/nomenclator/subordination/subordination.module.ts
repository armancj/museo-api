import { Module } from '@nestjs/common';
import { SubordinationService } from './subordination.service';
import { SubordinationController } from './subordination.controller';

@Module({
  controllers: [SubordinationController],
  providers: [SubordinationService],
})
export class SubordinationModule {}
