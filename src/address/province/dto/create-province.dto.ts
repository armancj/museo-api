import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProvinceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
