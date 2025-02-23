import { Module } from '@nestjs/common';
import { CommercialRegistrationController } from './commercial-registration.controller';
import { CommercialRegistrationService } from './commercial-registration.service';

@Module({
  controllers: [CommercialRegistrationController],
  providers: [CommercialRegistrationService]
})
export class CommercialRegistrationModule {}
