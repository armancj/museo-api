import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Section } from '../enum/section.enum';

export class CreateSectionDto {
  @IsNotEmpty()
  @IsEnum(Section)
  name: Section;

  @IsNotEmpty()
  @IsString()
  description: string;
}