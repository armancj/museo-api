import { Test, TestingModule } from '@nestjs/testing';
import { DescriptionControlService } from './description-control.service';

describe('DescriptionControlService', () => {
  let service: DescriptionControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DescriptionControlService,
        {
          provide: 'DESCRIPTION_CONTROL_SERVICE',
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

    service = module.get<DescriptionControlService>(DescriptionControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
