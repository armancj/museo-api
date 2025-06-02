import { Injectable, Logger } from '@nestjs/common';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import {
  CategoryMuseumDocument,
  CategoryMuseumMongoModel,
  CategoryMuseumNameEntity,
} from './schema/category-museum.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryMuseum } from './entities/category-museum.entity';
import { CategoryMuseums } from './entities/museums.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CategoryMuseumModel } from './model/category-museum.model';
import { FilterCategoryMuseumDto } from './dto/filter-category-museum.dto';
import { RootFilterQuery } from 'mongoose';
import { InstitutionType } from '../../address/institutions/enum/institutions.enum';
import { CacheService } from '../../cache/cache.service';

@Injectable()
export class CategoryMuseumService {
  private readonly logger = new Logger(CategoryMuseumService.name);
  private readonly CACHE_KEY_PREFIX = 'category-museum';

  constructor(
    @InjectModel(CategoryMuseumNameEntity)
    private readonly categoryMuseumRepository: CategoryMuseumMongoModel,
    private readonly cacheService: CacheService,
  ) {}

  async create(createCategoryMuseumDto: CreateCategoryMuseumDto) {
    const createdCategoryMuseum = await this.categoryMuseumRepository.create(
      createCategoryMuseumDto,
    );

    // Invalidate cache for all categories
    await this.invalidateCache();

    return CategoryMuseum.create(createdCategoryMuseum);
  }

  /**
   * Invalidates all cache entries related to category museums.
   */
  private async invalidateCache(): Promise<void> {
    this.logger.log('Invalidating category museum cache');
    await this.cacheService.invalidatePattern(this.CACHE_KEY_PREFIX);
  }

  async findAll(filter?: FilterCategoryMuseumDto) {
    // Create a cache key based on the filter parameters
    const cacheKey = `${this.CACHE_KEY_PREFIX}:all:${JSON.stringify(filter || {})}`;

    // Try to get the data from the cache first
    return this.cacheService.getOrSet(
      cacheKey,
      async () => {
        this.logger.log(`Cache miss for ${cacheKey}, fetching from database`);

        const query: RootFilterQuery<CategoryMuseumDocument> = {
          deleted: false,
        };

        if (filter?.active) {
          query.active = filter.active;
        }

        if (filter?.name) query.name = new RegExp(filter.name, 'i');

        if (filter?.institutionType) {
          const categoriesName = await this.getCategoryByInstitutionType(
            filter.institutionType,
          );
          query.$and = [{ name: categoriesName, active: true }];
        }

        const categoryMuseums = await this.categoryMuseumRepository
          .find(query)
          .exec();

        return CategoryMuseums.create(categoryMuseums).value;
      },
      // Cache for 1 hour (3600 seconds)
      3600,
    );
  }

  async findOne(uuid: string): Promise<CategoryMuseumModel> {
    const cacheKey = `${this.CACHE_KEY_PREFIX}:one:${uuid}`;

    return this.cacheService.getOrSet(
      cacheKey,
      async () => {
        this.logger.log(`Cache miss for ${cacheKey}, fetching from database`);

        const categoryMuseum = await this.getCategoryMuseum({
          uuid,
          deleted: false,
        });

        return CategoryMuseum.create(categoryMuseum);
      },
      // Cache for 1 hour (3600 seconds)
      3600,
    );
  }

  private async getCategoryMuseum(filter: Partial<CategoryMuseumModel>) {
    const categoryMuseum = await this.categoryMuseumRepository
      .findOne(filter)
      .exec();
    if (!categoryMuseum)
      throw new NotFoundException('Not found category museum');
    return categoryMuseum;
  }

  async update(uuid: string, updateCategoryMuseumDto: UpdateCategoryMuseumDto) {
    await this.findOne(uuid);
    await this.categoryMuseumRepository
      .updateOne({ uuid }, updateCategoryMuseumDto)
      .exec();

    // Invalidate cache after update
    await this.invalidateCache();
    this.logger.log(
      `Category museum with UUID ${uuid} updated, cache invalidated`,
    );
  }

  async remove(uuid: string) {
    const categoryMuseum = await this.findOne(uuid);
    const name = `${categoryMuseum.name}-${categoryMuseum.uuid}`;
    await this.categoryMuseumRepository
      .updateOne({ uuid, deleted: false }, { deleted: true, name })
      .exec();

    // Invalidate cache after removal
    await this.invalidateCache();
    this.logger.log(
      `Category museum with UUID ${uuid} removed, cache invalidated`,
    );
  }

  async getCategoryByInstitutionType(
    institutionType: string,
  ): Promise<RootFilterQuery<CategoryMuseumDocument>> {
    const cacheKey = `${this.CACHE_KEY_PREFIX}:institution-type:${institutionType}`;

    return this.cacheService.getOrSet(
      cacheKey,
      async () => {
        this.logger.log(`Cache miss for ${cacheKey}, generating filter`);

        const specialAndCategoryI = {
          $in: ['Categoría Especial', 'Categoría I'],
        };

        const categoryItoIII = {
          $in: ['Categoría I', 'Categoría II', 'Categoría III'],
        };

        const defaultFilter = {
          $nin: [
            'Categoría Especial',
            'Categoría I',
            'Categoría II',
            'Categoría III',
          ],
        };

        const filterMap: Map<
          InstitutionType | string,
          RootFilterQuery<CategoryMuseumDocument>
        > = new Map([
          [InstitutionType.MUSEUM, specialAndCategoryI],
          [InstitutionType.COMPLEX_MUSEUM, specialAndCategoryI],
          [InstitutionType.MUSEUM_ROOMS, categoryItoIII],
          [InstitutionType.EXT_MUSEUM, categoryItoIII],
        ]);

        return filterMap.get(institutionType) || defaultFilter;
      },
      // Cache for 24 hours (86,400 seconds) as this is static mapping
      86400,
    );
  }
}
