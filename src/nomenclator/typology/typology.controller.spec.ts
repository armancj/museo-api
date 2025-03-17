import { Test, TestingModule } from '@nestjs/testing';
import { TypologyController } from './typology.controller';
import { TypologyService } from './typology.service';

describe('TypologyController', () => {
  let controller: TypologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypologyController],
      providers: [TypologyService],
    }).compile();

    controller = module.get<TypologyController>(TypologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
