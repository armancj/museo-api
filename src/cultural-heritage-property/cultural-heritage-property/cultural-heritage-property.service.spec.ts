import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CulturalHeritagePropertyService } from './cultural-heritage-property.service';
import { CulturalHeritagePropertyEntity } from './Schema/cultural-heritage-property';

describe('CulturalHeritagePropertyService', () => {
  let service: CulturalHeritagePropertyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CulturalHeritagePropertyService,
        {
          provide: getModelToken(CulturalHeritagePropertyEntity),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
            deleteOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CulturalHeritagePropertyService>(CulturalHeritagePropertyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
