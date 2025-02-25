import { Test, TestingModule } from '@nestjs/testing';
import { CulturalRecordController } from './cultural-record.controller';
import { CulturalRecordService } from './cultural-record.service';

describe('CulturalRecordController', () => {
  let controller: CulturalRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CulturalRecordController],
      providers: [CulturalRecordService],
    }).compile();

    controller = module.get<CulturalRecordController>(CulturalRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
