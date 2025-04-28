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
  ],
})
export class CommandsModule {}
