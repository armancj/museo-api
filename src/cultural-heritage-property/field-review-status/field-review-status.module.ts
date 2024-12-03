import { Module } from '@nestjs/common';
import { FieldReviewStatusService } from './field-review-status.service';
import { FieldReviewStatusController } from './field-review-status.controller';

@Module({
  controllers: [FieldReviewStatusController],
  providers: [FieldReviewStatusService],
})
export class FieldReviewStatusModule {}
