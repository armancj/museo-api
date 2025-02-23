import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionTypesService } from './institution-types.service';

describe('InstitutionTypesService', () => {
  let service: InstitutionTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionTypesService],
    }).compile();

    service = module.get<InstitutionTypesService>(InstitutionTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
