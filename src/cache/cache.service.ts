import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';

/**
 * Service that provides methods for managing cache operations.
 * Wraps the NestJS CACHE_MANAGER to provide a more convenient API.
 */
@Injectable()
export class CacheService {
  private readonly logger = new Logger(CacheService.name);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  /**
   * Gets a value from the cache.
   * @param key The cache key
   * @returns The cached value or null if not found
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      return await this.cacheManager.get<T>(key);
    } catch (error) {
      this.logger.error(`Error getting cache key ${key}`, error);
      return null;
    }
  }

  /**
   * Sets a value in the cache.
   * @param key The cache key
   * @param value The value to cache
   * @param ttl Optional TTL in seconds
   */
  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    try {
      await this.cacheManager.set(key, value, ttl);
    } catch (error) {
      this.logger.error(`Error setting cache key ${key}`, error);
    }
  }

  /**
   * Deletes a value from the cache.
   * @param key The cache key
   */
  async delete(key: string): Promise<void> {
    try {
      await this.cacheManager.del(key);
    } catch (error) {
      this.logger.error(`Error deleting cache key ${key}`, error);
    }
  }

  /**
   * Gets a value from the cache or sets it if not found.
   * @param key The cache key
   * @param factory A function that returns the value to cache
   * @param ttl Optional TTL in seconds
   * @returns The cached value or the result of the factory function
   */
  async getOrSet<T>(
    key: string,
    factory: () => Promise<T>,
    ttl?: number,
  ): Promise<T> {
    const cachedValue = await this.get<T>(key);
    if (cachedValue !== null && cachedValue !== undefined) {
      return cachedValue;
    }

    const value = await factory();
    await this.set(key, value, ttl);
    return value;
  }

  /**
   * Invalidates all cache keys that match a pattern.
   * @param pattern A string pattern to match cache keys
   */
  async invalidatePattern(pattern: string): Promise<void> {
    try {
      // This is a basic implementation that works with the in-memory cache
      // For Redis; we would use the SCAN command with pattern matching
      const keys = await (this.cacheManager as any).store.keys();

      const matchingKeys = keys.filter((key: any) => key.includes(pattern));

      for (const key of matchingKeys) {
        await this.delete(key);
      }

      this.logger.log(
        `Invalidated ${matchingKeys.length} cache keys matching pattern: ${pattern}`,
      );
    } catch (error) {
      this.logger.error(`Error invalidating cache pattern ${pattern}`, error);
    }
  }

  /**
   * Clears the entire cache.
   */
  async clear(): Promise<void> {
    try {
      await (this.cacheManager as any).store.reset();
      this.logger.log('Cache cleared');
    } catch (error) {
      this.logger.error('Error clearing cache', error);
    }
  }
}
