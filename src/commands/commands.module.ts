import { Module } from '@nestjs/common';
import { CreateSuperAdmin } from './commands/create-super-admin';
import { UsersModule } from '../users/users.module';
import { CommandRunnerModule } from 'nest-commander';
import { CategoryMuseumModule } from '../nomenclator/institutions/category-museum/category-museum.module';

@Module({
  imports: [
    CommandRunnerModule.forModule(UsersModule, CategoryMuseumModule),
    UsersModule,
    CategoryMuseumModule,
  ],
  providers: [CreateSuperAdmin],
})
export class CommandsModule {}
