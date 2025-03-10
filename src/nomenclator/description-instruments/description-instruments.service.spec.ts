import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionInstrumentsService } from './description-instruments.service';

describe('DescriptionInstrumentsService', () => {
  let service: DescriptionInstrumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescriptionInstrumentsService],
    }).compile();

    service = module.get<DescriptionInstrumentsService>(DescriptionInstrumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
