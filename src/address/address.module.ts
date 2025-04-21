import { Module } from '@nestjs/common';
import { ProvinceModule } from './province/province.module';
import { CountryModule } from './country/country.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { SharedModule } from '../shared/shared.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { PhoneNumbersModule } from './contact-information/phone-numbers/phone-numbers.module';
import { EmailsModule } from './contact-information/emails/emails.module';
import { SocialMediaModule } from './contact-information/social-media/social-media.module';

@Module({
  imports: [
    ProvinceModule,
    CountryModule,
    MunicipalityModule,
    SharedModule,
    InstitutionsModule,
    PhoneNumbersModule,
    EmailsModule,
    SocialMediaModule,
  ],
})
export class AddressModule {}
