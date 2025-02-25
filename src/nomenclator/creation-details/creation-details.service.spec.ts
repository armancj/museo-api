import { Test, TestingModule } from '@nestjs/testing';
import { CreationDetailsService } from './creation-details.service';

describe('CreationDetailsService', () => {
  let service: CreationDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreationDetailsService],
    }).compile();

    service = module.get<CreationDetailsService>(CreationDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
