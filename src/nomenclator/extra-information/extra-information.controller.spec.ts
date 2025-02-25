import { Test, TestingModule } from '@nestjs/testing';
import { ExtraInformationController } from './extra-information.controller';
import { ExtraInformationService } from './extra-information.service';

describe('ExtraInformationController', () => {
  let controller: ExtraInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtraInformationController],
      providers: [ExtraInformationService],
    }).compile();

    controller = module.get<ExtraInformationController>(ExtraInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
