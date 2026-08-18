import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionInstrumentsController } from './description-instruments.controller';
import { DescriptionInstrumentsService } from './description-instruments.service';

describe('DescriptionInstrumentsController', () => {
  let controller: DescriptionInstrumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescriptionInstrumentsController],
      providers: [
        {
          provide: DescriptionInstrumentsService,
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

    controller = module.get<DescriptionInstrumentsController>(DescriptionInstrumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
