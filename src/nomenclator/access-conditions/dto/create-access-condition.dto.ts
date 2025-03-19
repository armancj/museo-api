import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAccessConditionDto {
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  @IsOptional()
  @IsString()
  description?: string;
}
