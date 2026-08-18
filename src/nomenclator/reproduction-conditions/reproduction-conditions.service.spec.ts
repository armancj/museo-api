import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReproductionConditionsService } from './reproduction-conditions.service';
import { ReproductionConditionEntity } from './entities/reproduction-condition.entity';

describe('ReproductionConditionsService', () => {
  let service: ReproductionConditionsService;
  let model: Model<ReproductionConditionEntity>;

  const mockReproductionCondition = {
    name: 'Test Condition',
    description: 'Test Description',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReproductionConditionsService,
        {
          provide: getModelToken(ReproductionConditionEntity.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockReproductionCondition),
            constructor: jest.fn().mockResolvedValue(mockReproductionCondition),
            find: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            save: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReproductionConditionsService>(ReproductionConditionsService);
    model = module.get<Model<ReproductionConditionEntity>>(
      getModelToken(ReproductionConditionEntity.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
