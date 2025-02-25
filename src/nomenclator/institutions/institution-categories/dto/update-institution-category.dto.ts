import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitutionCategoryDto } from './create-institution-category.dto';

export class UpdateInstitutionCategoryDto extends PartialType(CreateInstitutionCategoryDto) {}
