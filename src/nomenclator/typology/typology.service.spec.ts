import { Test, TestingModule } from '@nestjs/testing';
import { TypologyService } from './typology.service';

describe('TypologyService', () => {
  let service: TypologyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypologyService],
    }).compile();

    service = module.get<TypologyService>(TypologyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
