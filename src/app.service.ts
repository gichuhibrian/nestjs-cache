import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getHello() {
    await this.cacheManager.set('cache-item', { key: 32 }, 10);
    const cacheItem = this.cacheManager.get('cache-item');
    console.log('cacheItem', cacheItem);
    return 'Hello World!';
  }
}
