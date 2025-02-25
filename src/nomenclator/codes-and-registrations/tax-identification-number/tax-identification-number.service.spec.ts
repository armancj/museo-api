import { Test, TestingModule } from '@nestjs/testing';
import { TaxIdentificationNumberService } from './tax-identification-number.service';

describe('TaxIdentificationNumberService', () => {
  let service: TaxIdentificationNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxIdentificationNumberService],
    }).compile();

    service = module.get<TaxIdentificationNumberService>(TaxIdentificationNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
