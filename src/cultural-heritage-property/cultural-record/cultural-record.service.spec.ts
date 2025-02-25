import { Test, TestingModule } from '@nestjs/testing';
import { CulturalRecordService } from './cultural-record.service';

describe('CulturalRecordService', () => {
  let service: CulturalRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CulturalRecordService],
    }).compile();

    service = module.get<CulturalRecordService>(CulturalRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
