import { Module } from '@nestjs/common';
import { TaxIdentificationNumberService } from './tax-identification-number.service';
import { TaxIdentificationNumberController } from './tax-identification-number.controller';

@Module({
  controllers: [TaxIdentificationNumberController],
  providers: [TaxIdentificationNumberService],
})
export class TaxIdentificationNumberModule {}
