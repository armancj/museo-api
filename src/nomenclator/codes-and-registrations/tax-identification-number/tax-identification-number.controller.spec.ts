import { Test, TestingModule } from '@nestjs/testing';
import { TaxIdentificationNumberController } from './tax-identification-number.controller';
import { TaxIdentificationNumberService } from './tax-identification-number.service';

describe('TaxIdentificationNumberController', () => {
  let controller: TaxIdentificationNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxIdentificationNumberController],
      providers: [TaxIdentificationNumberService],
    }).compile();

    controller = module.get<TaxIdentificationNumberController>(TaxIdentificationNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
