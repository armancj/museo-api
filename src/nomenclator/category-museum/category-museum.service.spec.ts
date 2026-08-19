import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CategoryMuseumService } from './category-museum.service';
import { CategoryMuseumNameEntity } from './schema/category-museum.schema';
import { CacheService } from '../../cache/cache.service';

describe('CategoryMuseumService', () => {
  let service: CategoryMuseumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryMuseumService,
        {
          provide: getModelToken(CategoryMuseumNameEntity),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
          },
        },
        {
          provide: CacheService,
          useValue: {
            getOrSet: jest.fn(),
            invalidatePattern: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CategoryMuseumService>(CategoryMuseumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
