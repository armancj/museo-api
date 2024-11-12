import { Test, TestingModule } from '@nestjs/testing';
import { CulturalHeritagePropertyService } from './cultural-heritage-property.service';

describe('CulturalHeritagePropertyService', () => {
  let service: CulturalHeritagePropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CulturalHeritagePropertyService],
    }).compile();

    service = module.get<CulturalHeritagePropertyService>(CulturalHeritagePropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
