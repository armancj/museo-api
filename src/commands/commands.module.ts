import { Module } from '@nestjs/common';
import { CreateSuperAdmin } from './commands/create-super-admin';
import { UsersModule } from '../users/users.module';
import { CommandRunnerModule } from 'nest-commander';
import { CreateDefaultCategories } from './commands/create-default-categories';
import { CreateDefaultDescriptionInstruments } from './commands/create-default-description-instruments';
import { DescriptionInstrumentsModule } from '../nomenclator/description-instruments/description-instruments.module';
import { AccessConditionsModule } from '../nomenclator/access-conditions/access-conditions.module';
import { CreateDefaultAccessConditions } from './commands/create-default-access-reproduccion';
import { CategoryMuseumModule } from '../nomenclator/category-museum/category-museum.module';
import { SectionModule } from '../nomenclator/section/section.module';
import { CreateDefaultSections } from './commands/create-default-sections';
import { ValueGradeModule } from '../nomenclator/value-grade/value-grade.module';
import { CreateDefaultValueGrades } from './commands/create-default-value-grades';
import { HeritageTypeModule } from '../nomenclator/heritage-type/heritage-type.module';
import { CreateDefaultHeritageTypes } from './commands/create-default-heritage-types';
import { GenericClassificationModule } from '../nomenclator/generic-classification/generic-classification.module';
import { CreateDefaultGenericClassifications } from './commands/create-default-generic-classifications';
import { FundTitleModule } from '../nomenclator/fund-title/fund-title.module';
import { CreateDefaultFundTitles } from './commands/create-default-fund-titles';
import { EntryFormModule } from '../nomenclator/entry-form/entry-form.module';
import { CreateDefaultEntryForms } from './commands/create-default-entry-forms';
import { ConservationStatusModule } from '../nomenclator/conservation-status/conservation-status.module';
import { CreateDefaultConservationStatuses } from './commands/create-default-conservation-statuses';
import { ReproductionConditionsModule } from '../nomenclator/reproduction-conditions/reproduction-conditions.module';
import { CreateDefaultReproductionConditions } from './commands/create-default-reproduction-conditions';
import { CreateTestUsers } from './commands/create-test-users';
import { InstitutionsModule } from '../address';
import { CreateCulturalHeritageProperty } from './commands/create-cultural-heritage-property';
import { CulturalHeritagePropertyModule } from '../cultural-heritage-property';
import { EntryAndLocationRecordModule } from '../cultural-heritage-property/entry-and-location-record/entry-and-location-record.module';
import { ProducerAuthorRecordModule } from '../cultural-heritage-property/producer-author-record/producer-author-record.module';
import { CulturalRecordModule } from '../cultural-heritage-property/cultural-record/cultural-record.module';
import { AccessAndUseConditionsModule } from '../cultural-heritage-property/access-and-use-conditions/access-and-use-conditions.module';
import { AssociatedDocumentationModule } from '../cultural-heritage-property/associated-documentation/associated-documentation.module';
import { DescriptionControlModule } from '../cultural-heritage-property/description-control/description-control.module';
import { CulturalNotesModule } from '../cultural-heritage-property/cultural-notes/cultural-notes.module';

@Module({
  imports: [
    CommandRunnerModule,
    UsersModule,
    CategoryMuseumModule,
    DescriptionInstrumentsModule,
    AccessConditionsModule,
    SectionModule,
    ValueGradeModule,
    HeritageTypeModule,
    GenericClassificationModule,
    FundTitleModule,
    EntryFormModule,
    ConservationStatusModule,
    ReproductionConditionsModule,
    InstitutionsModule,
    CulturalHeritagePropertyModule,
    EntryAndLocationRecordModule,
    ProducerAuthorRecordModule,
    CulturalRecordModule,
    AccessAndUseConditionsModule,
    AssociatedDocumentationModule,
    DescriptionControlModule,
    CulturalNotesModule,
  ],
  providers: [
    CreateSuperAdmin,
    CreateDefaultCategories,
    CreateDefaultDescriptionInstruments,
    CreateDefaultAccessConditions,
    CreateDefaultSections,
    CreateDefaultValueGrades,
    CreateDefaultHeritageTypes,
    CreateDefaultGenericClassifications,
    CreateDefaultFundTitles,
    CreateDefaultEntryForms,
    CreateDefaultConservationStatuses,
    CreateDefaultReproductionConditions,
    CreateTestUsers,
    CreateCulturalHeritageProperty,
  ],
})
export class CommandsModule {}
