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

@Module({
  imports: [
    CommandRunnerModule,
    UsersModule,
    CategoryMuseumModule,
    DescriptionInstrumentsModule,
    AccessConditionsModule,
    SectionModule,
    ValueGradeModule,
  ],
  providers: [
    CreateSuperAdmin,
    CreateDefaultCategories,
    CreateDefaultDescriptionInstruments,
    CreateDefaultAccessConditions,
    CreateDefaultSections,
    CreateDefaultValueGrades,
  ],
})
export class CommandsModule {}
