import { PartialType } from '@nestjs/swagger';
import { CreateReproductionConditionDto } from './create-reproduction-condition.dto';

export class UpdatedReproductionConditionDto extends PartialType(
  CreateReproductionConditionDto,
) {}
