import { PartialType } from '@nestjs/swagger';
import { CreateAccessAndUseConditionDto } from './create-access-and-use-condition.dto';

/**
 * DTO for updating access and use conditions.
 *
 * This class extends `CreateAccessAndUseConditionDto` using `PartialType`,
 * making all fields optional for update purposes.
 */
export class UpdateAccessAndUseConditionDto extends PartialType(
    CreateAccessAndUseConditionDto,
) {}
