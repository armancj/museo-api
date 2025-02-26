import { Module } from '@nestjs/common';
import { CreateSuperAdmin } from './commands/create-super-admin';
import { UsersModule } from '../users/users.module';
import { CommandRunnerModule } from 'nest-commander';
import { CategoryMuseumModule } from '../nomenclator/institutions/category-museum/category-museum.module';
import { CreateDefaultCategories } from './commands/create-default-categories';

@Module({
  imports: [
    CommandRunnerModule,
    UsersModule,
    CategoryMuseumModule,
  ],
  providers: [CreateSuperAdmin, CreateDefaultCategories],
})
export class CommandsModule {}