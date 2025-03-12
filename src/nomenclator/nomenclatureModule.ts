import { Module } from '@nestjs/common';

import { CategoryMuseumModule } from './institutions/category-museum/category-museum.module';
import { InstitutionTypesModule } from './institutions/institution-types/institution-types.module';

import { MuseumTypesModule } from './institutions/museum-types/museum-types.module';
import { HeritageOfficesModule } from './institutions/heritage-offices/heritage-offices.module';
import { PhoneNumbersModule } from './contact-information/phone-numbers/phone-numbers.module';
import { EmailsModule } from './contact-information/emails/emails.module';
import { SocialMediaModule } from './contact-information/social-media/social-media.module';
import { ReeupCodeModule } from './codes-and-registrations/reeup-code/reeup-code.module';
import { TaxIdentificationNumberModule } from './codes-and-registrations/tax-identification-number/tax-identification-number.module';
import { CommercialRegistrationModule } from './codes-and-registrations/commercial-registration/commercial-registration.module';
import { SubordinationModule } from './subordination/subordination.module';
import { DescriptionUnitsModule } from './description-units/description-units.module';
import { NotesModule } from './notes/notes.module';
import { CreationDetailsModule } from './creation-details/creation-details.module';
import { ReportsModule } from './reports/reports.module';
import { ExtraInformationModule } from './extra-information/extra-information.module';
import { TypologyModule } from './typology/typology.module';

@Module({
  imports: [
    CategoryMuseumModule,
    InstitutionTypesModule,
    TypologyModule,
    
    MuseumTypesModule,
    HeritageOfficesModule,
    PhoneNumbersModule,
    EmailsModule,
    SocialMediaModule,
    ReeupCodeModule,
    TaxIdentificationNumberModule,
    CommercialRegistrationModule,
    SubordinationModule,
    DescriptionUnitsModule,
    NotesModule,
    CreationDetailsModule,
    ReportsModule,
    ExtraInformationModule,
  ],
  exports: [
    CategoryMuseumModule,
    InstitutionTypesModule,
    
    MuseumTypesModule,
    HeritageOfficesModule,
    PhoneNumbersModule,
    EmailsModule,
    SocialMediaModule,
    ReeupCodeModule,
    TaxIdentificationNumberModule,
    CommercialRegistrationModule,
    SubordinationModule,
    DescriptionUnitsModule,
    NotesModule,
    CreationDetailsModule,
    ReportsModule,
    ExtraInformationModule,
    TypologyModule,
  ],
})
export class NomenclatureModule {}
