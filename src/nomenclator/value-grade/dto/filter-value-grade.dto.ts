import { PickType } from '@nestjs/swagger';
import { UpdateValueGradeDto } from './update-value-grade.dto';

export class FilterValueGradeDto extends PickType(UpdateValueGradeDto, [
  'name',
] as const) {}
