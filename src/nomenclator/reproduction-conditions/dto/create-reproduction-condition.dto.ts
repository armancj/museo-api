import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReproductionConditionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
