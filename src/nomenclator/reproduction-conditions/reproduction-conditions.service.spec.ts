import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReproductionConditionsService } from './reproduction-conditions.service';
import { ReproductionConditionEntity, ReproductionConditionDocument } from './entities/reproduction-condition.entity';
import { ReproductionCondition } from '../common/enums/reproduction-condition.enum';

describe('ReproductionConditionsService', () => {
  let service: ReproductionConditionsService;
  let model: Model<ReproductionConditionDocument>;

  const mockReproductionCondition = {
    name: 'Test Condition',
    type: ReproductionCondition.FREE,
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
    model = module.get<Model<ReproductionConditionDocument>>(
      getModelToken(ReproductionConditionEntity.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
