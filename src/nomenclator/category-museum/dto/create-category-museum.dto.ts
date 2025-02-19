import { CategoryMuseumModel } from '../model/category-museum.model';
import { IsString } from 'class-validator';

export class CreateCategoryMuseumDto
  implements Pick<CategoryMuseumModel, 'name'>
{
  @IsString()
  name: string;
}
