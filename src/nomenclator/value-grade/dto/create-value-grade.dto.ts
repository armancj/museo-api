import { IsNotEmpty, IsString } from 'class-validator';

export class CreateValueGradeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
