import { Test, TestingModule } from '@nestjs/testing';
import { CreationDetailsController } from './creation-details.controller';
import { CreationDetailsService } from './creation-details.service';

describe('CreationDetailsController', () => {
  let controller: CreationDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreationDetailsController],
      providers: [CreationDetailsService],
    }).compile();

    controller = module.get<CreationDetailsController>(CreationDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
