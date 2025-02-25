import { Test, TestingModule } from '@nestjs/testing';
import { HeritageOfficesController } from './heritage-offices.controller';
import { HeritageOfficesService } from './heritage-offices.service';

describe('HeritageOfficesController', () => {
  let controller: HeritageOfficesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeritageOfficesController],
      providers: [HeritageOfficesService],
    }).compile();

    controller = module.get<HeritageOfficesController>(HeritageOfficesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
