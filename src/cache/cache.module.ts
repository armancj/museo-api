import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheService } from './cache.service';

/**
 * Module that provides caching functionality for the application.
 * Currently, it uses in-memory caching but can be configured to use Redis or other cache stores.
 */
@Module({
  imports: [
    NestCacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ttl: configService.get('CACHE_TTL', 60 * 60), // Default: 1 hour in seconds
        max: configService.get('CACHE_MAX_ITEMS', 100), // Maximum number of items in the cache
        isGlobal: true,
      }),
    }),
  ],
  providers: [CacheService],
  exports: [NestCacheModule, CacheService],
})
export class CacheModule {}
