import { Module } from '@nestjs/common';
import { CommercialRegistrationService } from './commercial-registration.service';
import { CommercialRegistrationController } from './commercial-registration.controller';

@Module({
  controllers: [CommercialRegistrationController],
  providers: [CommercialRegistrationService],
})
export class CommercialRegistrationModule {}
