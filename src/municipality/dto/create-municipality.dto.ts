import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMunicipalityDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  province: string;
}
