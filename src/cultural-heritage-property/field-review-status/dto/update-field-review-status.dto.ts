import { PartialType } from '@nestjs/swagger';
import { CreateFieldReviewStatusDto } from './create-field-review-status.dto';

export class UpdateFieldReviewStatusDto extends PartialType(
  CreateFieldReviewStatusDto,
) {}
