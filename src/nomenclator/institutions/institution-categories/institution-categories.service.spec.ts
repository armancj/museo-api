import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionCategoriesService } from './institution-categories.service';

describe('InstitutionCategoriesService', () => {
  let service: InstitutionCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionCategoriesService],
    }).compile();

    service = module.get<InstitutionCategoriesService>(InstitutionCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
