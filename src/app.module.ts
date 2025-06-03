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
 * Main application module that imports all feature modules and configures the application.
 *
 * This module serves as the root module of the NestJS application and is responsible for:
 * - Importing and organizing all feature modules
 * - Setting up cross-cutting concerns like interceptors, logging, and caching
 * - Configuring global providers and controllers
 *
 * The module structure follows domain-driven design principles, with each domain
 * encapsulated in its own module with clear boundaries and responsibilities.
 *
 * Cross-cutting concerns are encapsulated in their own modules to promote separation
 * of concerns and maintainability.
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
