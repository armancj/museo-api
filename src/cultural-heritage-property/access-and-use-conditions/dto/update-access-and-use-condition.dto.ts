import { PartialType } from '@nestjs/swagger';
import { CreateAccessAndUseConditionDto } from './create-access-and-use-condition.dto';

export class UpdateAccessAndUseConditionDto extends PartialType(
  CreateAccessAndUseConditionDto,
) {}
