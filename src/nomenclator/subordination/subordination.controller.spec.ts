import { Test, TestingModule } from '@nestjs/testing';
import { SubordinationController } from './subordination.controller';
import { SubordinationService } from './subordination.service';

describe('SubordinationController', () => {
  let controller: SubordinationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubordinationController],
      providers: [SubordinationService],
    }).compile();

    controller = module.get<SubordinationController>(SubordinationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
