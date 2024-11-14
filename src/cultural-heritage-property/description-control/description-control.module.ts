import { Module } from '@nestjs/common';
import { DescriptionControlService } from './description-control.service';
import { DescriptionControlController } from './description-control.controller';

@Module({
  controllers: [DescriptionControlController],
  providers: [DescriptionControlService],
})
export class DescriptionControlModule {}
