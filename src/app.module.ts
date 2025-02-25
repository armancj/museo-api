import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';
import { SharedModule } from './shared/shared.module';
import { FileStorageModule } from './file-storage/file-storage.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './common/interceptors/error.Interceptor';
import { SeedModule } from './seed/seed.module';
import { AddressModule } from './address/address.module';
import { CategoryMuseumModule } from './nomenclator/institutions/category-museum/category-museum.module';
import { NomenclatureModule } from './nomenclator/nomenclatureModule';
import { InstitutionTypesController } from './nomenclator/institutions/institution-types/institution-types.controller';
import { InstitutionTypesService } from './nomenclator/institutions/institution-types/institution-types.service';
import { InstitutionTypesModule } from './nomenclator/institutions/institution-types/institution-types.module';
import { InstitutionCategoriesModule } from './nomenclator/institutions/institution-categories/institution-categories.module';
import { MuseumTypesModule } from './nomenclator/institutions/museum-types/museum-types.module';
import { HeritageOfficesModule } from './nomenclator/institutions/heritage-offices/heritage-offices.module';
import { PhoneNumbersModule } from './nomenclator/contact-information/phone-numbers/phone-numbers.module';
import { EmailsModule } from './nomenclator/contact-information/emails/emails.module';
import { SocialMediaModule } from './nomenclator/contact-information/social-media/social-media.module';
import { ReeupCodeModule } from './nomenclator/codes-and-registrations/reeup-code/reeup-code.module';
import { TaxIdentificationNumberModule } from './nomenclator/codes-and-registrations/tax-identification-number/tax-identification-number.module';
import { CommercialRegistrationModule } from './nomenclator/codes-and-registrations/commercial-registration/commercial-registration.module';
import { SubordinationModule } from './nomenclator/subordination/subordination.module';
import { DescriptionUnitsModule } from './nomenclator/description-units/description-units.module';
import { NotesModule } from './nomenclator/notes/notes.module';
import { CreationDetailsModule } from './nomenclator/creation-details/creation-details.module';
import { ReportsModule } from './nomenclator/reports/reports.module';
import { ExtraInformationModule } from './nomenclator/extra-information/extra-information.module';
import { CulturalHeritagePropertyModule } from './cultural-heritage-property/cultural-heritage-property/cultural-heritage-property.module';
import { CommandsModule } from './commands/commands.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({ global: true }),
    ConfigModule,
    AuthModule,
    UsersModule,
    CoreModule,
    SharedModule,
    FileStorageModule,
    AddressModule,
    SeedModule,
    CategoryMuseumModule,
    NomenclatureModule,
    CommercialRegistrationModule,
    InstitutionTypesModule,
    InstitutionCategoriesModule,
    MuseumTypesModule,
    HeritageOfficesModule,
    PhoneNumbersModule,
    EmailsModule,
    SocialMediaModule,
    ReeupCodeModule,
    TaxIdentificationNumberModule,
    SubordinationModule,
    DescriptionUnitsModule,
    NotesModule,
    CreationDetailsModule,
    ReportsModule,
    ExtraInformationModule,
    CulturalHeritagePropertyModule,
    CommandsModule,
    LoggerModule,
  ],
  controllers: [AppController, InstitutionTypesController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    LoggerInterceptor,
    InstitutionTypesService,
  ],
})
export class AppModule {}
