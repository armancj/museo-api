import { Test, TestingModule } from '@nestjs/testing';
import { ProducerAuthorRecordService } from './producer-author-record.service';

describe('ProducerAuthorRecordService', () => {
  let service: ProducerAuthorRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProducerAuthorRecordService,
        {
          provide: 'PRODUCER_AUTHOR_RECORD_SERVICE',
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

    service = module.get<ProducerAuthorRecordService>(
      ProducerAuthorRecordService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
