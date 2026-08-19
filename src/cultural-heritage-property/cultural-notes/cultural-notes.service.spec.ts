import { Test, TestingModule } from '@nestjs/testing';
import { CulturalNotesService } from './cultural-notes.service';

describe('CulturalNotesService', () => {
  let service: CulturalNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CulturalNotesService,
        {
          provide: 'CULTURAL_NOTES_SERVICE',
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CulturalNotesService>(CulturalNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
