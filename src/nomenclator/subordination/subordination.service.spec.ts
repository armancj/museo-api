import { Test, TestingModule } from '@nestjs/testing';
import { SubordinationService } from './subordination.service';

describe('SubordinationService', () => {
  let service: SubordinationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubordinationService],
    }).compile();

    service = module.get<SubordinationService>(SubordinationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
