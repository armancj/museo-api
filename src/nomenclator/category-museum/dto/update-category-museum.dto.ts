import { PartialType } from '@nestjs/swagger';
import { CreateCategoryMuseumDto } from './create-category-museum.dto';

export class UpdateCategoryMuseumDto extends PartialType(CreateCategoryMuseumDto) {}
