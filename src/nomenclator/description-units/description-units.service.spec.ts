import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionUnitsService } from './description-units.service';

describe('DescriptionUnitsService', () => {
  let service: DescriptionUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescriptionUnitsService],
    }).compile();

    service = module.get<DescriptionUnitsService>(DescriptionUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
