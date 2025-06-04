import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './error.Interceptor';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerModule } from '../../logger/logger.module';

/**
 * Module that encapsulates all global interceptors.
 * This improves modularity by grouping related components together.
 */
@Module({
  imports: [LoggerModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
export class InterceptorsModule {}
