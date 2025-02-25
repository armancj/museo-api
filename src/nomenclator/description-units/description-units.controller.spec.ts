import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionUnitsController } from './description-units.controller';
import { DescriptionUnitsService } from './description-units.service';

describe('DescriptionUnitsController', () => {
  let controller: DescriptionUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescriptionUnitsController],
      providers: [DescriptionUnitsService],
    }).compile();

    controller = module.get<DescriptionUnitsController>(DescriptionUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
