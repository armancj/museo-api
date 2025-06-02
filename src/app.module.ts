import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FileStorageModule } from './file-storage/file-storage.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { AddressModule } from './address';
import { CulturalHeritagePropertyModule } from './cultural-heritage-property';
import { CommandsModule } from './commands/commands.module';
import { LoggerModule } from './logger/logger.module';
import { NomenclatureModule } from './nomenclator/nomenclature.module';
import { TestDataModule } from './test-data/test-data.module';
import { InterceptorsModule } from './common/interceptors/interceptors.module';
import { CacheModule } from './cache/cache.module';

/**
 * Main application module that imports all feature modules.
 * Cross-cutting concerns like interceptors are encapsulated in their own modules.
 */
@Module({
  imports: [
    EventEmitterModule.forRoot({ global: true }),
    ConfigModule,
    LoggerModule,
    CacheModule, // Module that provides caching functionality
    InterceptorsModule, // Module that encapsulates all interceptors
    AuthModule,
    UsersModule,
    CoreModule,
    SharedModule,
    FileStorageModule,
    AddressModule,
    SeedModule,
    CulturalHeritagePropertyModule,
    CommandsModule,
    NomenclatureModule,
    TestDataModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
