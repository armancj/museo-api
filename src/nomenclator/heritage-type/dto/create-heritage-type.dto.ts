import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { HeritageType } from '../enum/heritage-type.enum';

export class CreateHeritageTypeDto {
  @IsNotEmpty()
  @IsEnum(HeritageType)
  name: HeritageType;

  @IsNotEmpty()
  @IsString()
  description: string;
}