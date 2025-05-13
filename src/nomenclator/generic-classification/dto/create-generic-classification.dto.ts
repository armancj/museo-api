import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenericClassificationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
