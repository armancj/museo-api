import { Module } from '@nestjs/common';
import { ExtraInformationService } from './extra-information.service';
import { ExtraInformationController } from './extra-information.controller';

@Module({
  controllers: [ExtraInformationController],
  providers: [ExtraInformationService],
})
export class ExtraInformationModule {}
