import { Test, TestingModule } from '@nestjs/testing';
import { TestDataController } from './test-data.controller';
import { TestDataService } from './test-data.service';

describe('TestDataController', () => {
  let controller: TestDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestDataController],
      providers: [
        {
          provide: TestDataService,
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

    controller = module.get<TestDataController>(TestDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
