import { Test, TestingModule } from '@nestjs/testing';
import { HeritageOfficesController } from './heritage-offices.controller';

describe('HeritageOfficesController', () => {
  let controller: HeritageOfficesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeritageOfficesController],
    }).compile();

    controller = module.get<HeritageOfficesController>(HeritageOfficesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
