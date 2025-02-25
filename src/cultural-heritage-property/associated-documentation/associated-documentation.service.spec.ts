import { Test, TestingModule } from '@nestjs/testing';
import { AssociatedDocumentationService } from './associated-documentation.service';

describe('AssociatedDocumentationService', () => {
  let service: AssociatedDocumentationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssociatedDocumentationService],
    }).compile();

    service = module.get<AssociatedDocumentationService>(AssociatedDocumentationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
