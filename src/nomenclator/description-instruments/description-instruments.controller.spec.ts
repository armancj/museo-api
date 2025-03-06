import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionInstrumentsController } from './description-instruments.controller';

describe('DescriptionInstrumentsController', () => {
  let controller: DescriptionInstrumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescriptionInstrumentsController],
    }).compile();

    controller = module.get<DescriptionInstrumentsController>(DescriptionInstrumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
