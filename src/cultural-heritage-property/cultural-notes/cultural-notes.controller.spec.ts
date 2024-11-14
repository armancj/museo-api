import { Test, TestingModule } from '@nestjs/testing';
import { CulturalNotesController } from './cultural-notes.controller';
import { CulturalNotesService } from './cultural-notes.service';

describe('CulturalNotesController', () => {
  let controller: CulturalNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CulturalNotesController],
      providers: [CulturalNotesService],
    }).compile();

    controller = module.get<CulturalNotesController>(CulturalNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
