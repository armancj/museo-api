import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';
import { SharedModule } from './shared/shared.module';
import { FileStorageModule } from './file-storage/file-storage.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './common/interceptors/error.Interceptor';
import { SeedModule } from './seed/seed.module';
import { AddressModule } from './address/address.module';
import { CategoryMuseumModule } from './nomenclator/institutions/category-museum/category-museum.module';
import { NomenclatorModule } from './nomenclator/nomenclator.module';
import { InstitutionTypesController } from './nomenclator/institutions/institution-types/institution-types.controller';
import { InstitutionTypesService } from './nomenclator/institutions/institution-types/institution-types.service';
import { CommercialRegistrationModule } from './commercial-registration/commercial-registration.module';


@Module({
  imports: [
    EventEmitterModule.forRoot({ global: true }),
    ConfigModule,
    AuthModule,
    UsersModule,
    CoreModule,
    SharedModule,
    FileStorageModule,
    AddressModule,
    SeedModule,
    CategoryMuseumModule,
    NomenclatorModule,
    CommercialRegistrationModule,
  ],
  controllers: [AppController, InstitutionTypesController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    LoggerInterceptor,
    InstitutionTypesService,
  ],
})
export class AppModule {}
