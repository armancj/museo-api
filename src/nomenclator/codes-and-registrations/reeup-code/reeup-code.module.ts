import { Module } from '@nestjs/common';
import { ReeupCodeService } from './reeup-code.service';
import { ReeupCodeController } from './reeup-code.controller';

@Module({
  controllers: [ReeupCodeController],
  providers: [ReeupCodeService],
})
export class ReeupCodeModule {}
