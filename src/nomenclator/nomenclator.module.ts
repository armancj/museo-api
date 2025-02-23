import { Module } from '@nestjs/common';
import { SubordinationModule } from './subordination/subordination.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { ContactInformationModule } from './contact-information/contact-information.module';
import { CodesAndRegistrationsModule } from './codes-and-registrations/codes-and-registrations.module';
import { DescriptionUnitsModule } from './description-units/description-units.module';
import { NotesModule } from './notes/notes.module';
import { CreationDetailsModule } from './creation-details/creation-details.module';
import { ReportsModule } from './reports/reports.module';
import { ExtraInformationModule } from './extra-information/extra-information.module';

@Module({
  imports: [SubordinationModule, InstitutionsModule, ContactInformationModule, CodesAndRegistrationsModule, DescriptionUnitsModule, NotesModule, CreationDetailsModule, ReportsModule, ExtraInformationModule]
})
export class NomenclatorModule {}
