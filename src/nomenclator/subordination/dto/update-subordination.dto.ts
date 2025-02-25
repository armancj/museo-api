import { PartialType } from '@nestjs/mapped-types';
import { CreateSubordinationDto } from './create-subordination.dto';

export class UpdateSubordinationDto extends PartialType(CreateSubordinationDto) {}
