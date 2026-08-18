import { Test, TestingModule } from '@nestjs/testing';
import { AssociatedDocumentationService } from './associated-documentation.service';

describe('AssociatedDocumentationService', () => {
  let service: AssociatedDocumentationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AssociatedDocumentationService,
        {
          provide: 'ASSOCIATED_DOCUMENTATION_SERVICE',
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

    service = module.get<AssociatedDocumentationService>(AssociatedDocumentationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
