import { IsEnum, IsOptional } from 'class-validator';
import { HeritageType } from '../enum/heritage-type.enum';

export class FilterHeritageTypeDto {
  @IsOptional()
  @IsEnum(HeritageType)
  name?: HeritageType;
}