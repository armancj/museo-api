import { PartialType } from '@nestjs/swagger';
import { CreateInstitutionCategoryDto } from './create-institution-category.dto';

export class UpdateInstitutionCategoryDto extends PartialType(CreateInstitutionCategoryDto) {}
