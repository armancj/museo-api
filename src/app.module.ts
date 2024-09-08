import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from "./config/config.module";
import { CoreModule } from "./core/core.module";
import { LoggerInterceptor } from "./common/interceptors/logger.interceptor";

@Module({
  imports: [
    EventEmitterModule.forRoot({ verboseMemoryLeak: true }),
    ConfigModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [LoggerInterceptor],
})
export class AppModule {}
