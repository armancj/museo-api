import { Module } from '@nestjs/common';
import { CreationDetailsService } from './creation-details.service';
import { CreationDetailsController } from './creation-details.controller';

@Module({
  controllers: [CreationDetailsController],
  providers: [CreationDetailsService],
})
export class CreationDetailsModule {}
