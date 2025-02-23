import { Module } from '@nestjs/common';
import { ReeupCodeModule } from './reeup-code/reeup-code.module';
import { TaxIdentificationNumberModule } from './tax-identification-number/tax-identification-number.module';
import { CommercialRegistrationModule } from './commercial-registration/commercial-registration.module';

@Module({
  imports: [ReeupCodeModule, TaxIdentificationNumberModule, CommercialRegistrationModule]
})
export class CodesAndRegistrationsModule {}
