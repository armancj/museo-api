import { Module } from '@nestjs/common';
import { CreateSuperAdmin } from './commands/create-super-admin';
import { UsersModule } from '../users/users.module';
import { CommandRunnerModule } from 'nest-commander';
import { CategoryMuseumModule } from '../nomenclator/institutions/category-museum/category-museum.module';
import { CreateDefaultCategories } from './commands/create-default-categories';
import { CreateDefaultDescriptionInstruments } from './commands/create-default-description-instruments';
import { DescriptionInstrumentsModule } from '../nomenclator/description-instruments/description-instruments.module';
import { BaseSchema } from '../common/schema/base.schema';



@Module({
  imports: [
    CommandRunnerModule,
    UsersModule,
    CategoryMuseumModule,
    DescriptionInstrumentsModule,
  ],
  providers: [
    CreateSuperAdmin,
    CreateDefaultCategories,
    CreateDefaultDescriptionInstruments,
  ],
})
export class CommandsModule { }