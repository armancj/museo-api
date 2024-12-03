import { PartialType } from '@nestjs/mapped-types';
import { CreateFieldReviewStatusDto } from './create-field-review-status.dto';

export class UpdateFieldReviewStatusDto extends PartialType(CreateFieldReviewStatusDto) {}
