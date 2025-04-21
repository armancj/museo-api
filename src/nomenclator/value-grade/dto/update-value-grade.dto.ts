import { PartialType } from '@nestjs/swagger';
import { CreateValueGradeDto } from './create-value-grade.dto';

export class UpdateValueGradeDto extends PartialType(CreateValueGradeDto) {}