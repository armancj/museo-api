import { Test, TestingModule } from '@nestjs/testing';
import { AccessAndUseConditionsService } from './access-and-use-conditions.service';

describe('AccessAndUseConditionsService', () => {
  let service: AccessAndUseConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessAndUseConditionsService],
    }).compile();

    service = module.get<AccessAndUseConditionsService>(AccessAndUseConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
