import { Test, TestingModule } from '@nestjs/testing';
import { CulturalHeritagePropertyController } from './cultural-heritage-property.controller';
import { CulturalHeritagePropertyService } from './cultural-heritage-property.service';

describe('CulturalHeritagePropertyController', () => {
  let controller: CulturalHeritagePropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CulturalHeritagePropertyController],
      providers: [
        {
          provide: CulturalHeritagePropertyService,
          useValue: {
            created: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
            removePermanent: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CulturalHeritagePropertyController>(
      CulturalHeritagePropertyController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
