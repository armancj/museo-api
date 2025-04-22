import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UpdateCategoryMuseumDto } from './update-category-museum.dto';

export class FilterCategoryMuseumDto extends UpdateCategoryMuseumDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  institutionType?: string;
}
