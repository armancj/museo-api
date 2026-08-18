import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TypologyService } from './typology.service';
import { Typology } from './entities/typology.entity';

describe('TypologyService', () => {
  let service: TypologyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypologyService,
        {
          provide: getModelToken(Typology.name),
          useValue: {
            create: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TypologyService>(TypologyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
