import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFundTitleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
