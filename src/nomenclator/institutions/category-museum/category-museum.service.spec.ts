import { Test, TestingModule } from '@nestjs/testing';
import { CategoryMuseumService } from './category-museum.service';

describe('CategoryMuseumService', () => {
  let service: CategoryMuseumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryMuseumService],
    }).compile();

    service = module.get<CategoryMuseumService>(CategoryMuseumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
