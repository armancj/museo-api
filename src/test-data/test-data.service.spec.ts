import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TestDataService } from './test-data.service';
import { TestDataNameEntity } from './schema/test-data.schema';

describe('TestDataService', () => {
  let service: TestDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestDataService,
        {
          provide: getModelToken(TestDataNameEntity),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TestDataService>(TestDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
