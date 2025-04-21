import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ValueGrade } from '../enum/value-grade.enum';

export class CreateValueGradeDto {
  @IsNotEmpty()
  @IsEnum(ValueGrade)
  name: ValueGrade;

  @IsNotEmpty()
  @IsString()
  description: string;
}