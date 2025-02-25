import { Test, TestingModule } from '@nestjs/testing';
import { CulturalHeritagePropertyController } from './cultural-heritage-property.controller';

describe('CulturalHeritagePropertyController', () => {
  let controller: CulturalHeritagePropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CulturalHeritagePropertyController],
    }).compile();

    controller = module.get<CulturalHeritagePropertyController>(
      CulturalHeritagePropertyController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
