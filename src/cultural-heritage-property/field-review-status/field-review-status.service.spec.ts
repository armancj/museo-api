import { Test, TestingModule } from '@nestjs/testing';
import { FieldReviewStatusService } from './field-review-status.service';

describe('FieldReviewStatusService', () => {
  let service: FieldReviewStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldReviewStatusService],
    }).compile();

    service = module.get<FieldReviewStatusService>(FieldReviewStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
