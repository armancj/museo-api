import { Test, TestingModule } from '@nestjs/testing';
import { HeritageOfficesService } from './heritage-offices.service';

describe('HeritageOfficesService', () => {
  let service: HeritageOfficesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeritageOfficesService],
    }).compile();

    service = module.get<HeritageOfficesService>(HeritageOfficesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
