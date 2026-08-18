import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { DescriptionInstrumentsService } from './description-instruments.service';
import { DescriptionInstrumentNameEntity } from './schemas/description-instrument.schema';

describe('DescriptionInstrumentsService', () => {
  let service: DescriptionInstrumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DescriptionInstrumentsService,
        {
          provide: getModelToken(DescriptionInstrumentNameEntity),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<DescriptionInstrumentsService>(DescriptionInstrumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
