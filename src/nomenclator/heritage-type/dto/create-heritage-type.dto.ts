import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHeritageTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
