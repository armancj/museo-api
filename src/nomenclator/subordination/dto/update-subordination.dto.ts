import { PartialType } from '@nestjs/swagger';
import { CreateSubordinationDto } from './create-subordination.dto';

export class UpdateSubordinationDto extends PartialType(CreateSubordinationDto) {}
