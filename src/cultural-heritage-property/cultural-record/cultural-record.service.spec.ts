import { Test, TestingModule } from '@nestjs/testing';
import { CulturalRecordService } from './cultural-record.service';

describe('CulturalRecordService', () => {
  let service: CulturalRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CulturalRecordService,
        {
          provide: 'CULTURAL_RECORD_SERVICE',
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

    service = module.get<CulturalRecordService>(CulturalRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
