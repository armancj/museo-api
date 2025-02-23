import { Test, TestingModule } from '@nestjs/testing';
import { MuseumTypesController } from './museum-types.controller';

describe('MuseumTypesController', () => {
  let controller: MuseumTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MuseumTypesController],
    }).compile();

    controller = module.get<MuseumTypesController>(MuseumTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
