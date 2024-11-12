import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessAndUseConditionDto } from './create-access-and-use-condition.dto';

export class UpdateAccessAndUseConditionDto extends PartialType(CreateAccessAndUseConditionDto) {}
