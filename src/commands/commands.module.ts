import { Module } from '@nestjs/common';
import { CreateSuperAdmin } from './commands/create-super-admin';
import { UsersModule } from '../users/users.module';
import { CommandRunnerModule } from 'nest-commander';

@Module({
  imports: [CommandRunnerModule.forModule(UsersModule), UsersModule],
  providers: [CreateSuperAdmin],
})
export class CommandsModule {}
