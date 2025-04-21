import { IsEnum, IsOptional } from 'class-validator';
import { ValueGrade } from '../enum/value-grade.enum';

export class FilterValueGradeDto {
  @IsOptional()
  @IsEnum(ValueGrade)
  name?: ValueGrade;
}