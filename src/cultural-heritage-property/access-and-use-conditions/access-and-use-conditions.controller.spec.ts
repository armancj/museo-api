import { Test, TestingModule } from '@nestjs/testing';
import { AccessAndUseConditionsController } from './access-and-use-conditions.controller';
import { AccessAndUseConditionsService } from './access-and-use-conditions.service';

describe('AccessAndUseConditionsController', () => {
  let controller: AccessAndUseConditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessAndUseConditionsController],
      providers: [AccessAndUseConditionsService],
    }).compile();

    controller = module.get<AccessAndUseConditionsController>(
      AccessAndUseConditionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
