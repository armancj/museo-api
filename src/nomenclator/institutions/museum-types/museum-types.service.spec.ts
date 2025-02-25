import { Test, TestingModule } from '@nestjs/testing';
import { MuseumTypesService } from './museum-types.service';

describe('MuseumTypesService', () => {
  let service: MuseumTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MuseumTypesService],
    }).compile();

    service = module.get<MuseumTypesService>(MuseumTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
