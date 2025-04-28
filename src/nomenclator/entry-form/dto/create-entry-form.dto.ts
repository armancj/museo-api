import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEntryFormDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
