import { IsEnum, IsOptional } from 'class-validator';
import { Section } from '../enum/section.enum';

export class FilterSectionDto {
  @IsOptional()
  @IsEnum(Section)
  name?: Section;
}