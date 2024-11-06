import { Test, TestingModule } from '@nestjs/testing';
import { ProducerAuthorRecordController } from './producer-author-record.controller';
import { ProducerAuthorRecordService } from './producer-author-record.service';

describe('ProducerAuthorRecordController', () => {
  let controller: ProducerAuthorRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerAuthorRecordController],
      providers: [ProducerAuthorRecordService],
    }).compile();

    controller = module.get<ProducerAuthorRecordController>(ProducerAuthorRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
