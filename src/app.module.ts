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
import { CulturalHeritagePropertyModule } from './cultural-heritage-property/cultural-heritage-property/cultural-heritage-property.module';
import { CommandsModule } from './commands/commands.module';
import { LoggerModule } from './logger/logger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NomenclatureModule } from './nomenclator/nomenclatureModule';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    EventEmitterModule.forRoot({ global: true }),
    ConfigModule,
    AuthModule,
    UsersModule,
    CoreModule,
    SharedModule,
    FileStorageModule,
    AddressModule,
    SeedModule,
    CulturalHeritagePropertyModule,
    CommandsModule,
    LoggerModule,
    NomenclatureModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    LoggerInterceptor,
  ],
})
export class AppModule {
  configureSwagger(app: any) {
    const config = new DocumentBuilder()
      .setTitle('Museo API')
      .setDescription('API documentation for Museo')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
