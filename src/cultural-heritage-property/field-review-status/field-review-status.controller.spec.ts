import { Test, TestingModule } from '@nestjs/testing';
import { FieldReviewStatusController } from './field-review-status.controller';
import { FieldReviewStatusService } from './field-review-status.service';

describe('FieldReviewStatusController', () => {
  let controller: FieldReviewStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldReviewStatusController],
      providers: [FieldReviewStatusService],
    }).compile();

    controller = module.get<FieldReviewStatusController>(FieldReviewStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
