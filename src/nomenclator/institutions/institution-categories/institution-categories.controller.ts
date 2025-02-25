import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionCategoriesService } from './institution-categories.service';
import { CreateInstitutionCategoryDto } from './dto/create-institution-category.dto';
import { UpdateInstitutionCategoryDto } from './dto/update-institution-category.dto';

@Controller('institution-categories')
export class InstitutionCategoriesController {
  constructor(private readonly institutionCategoriesService: InstitutionCategoriesService) {}

  @Post()
  create(@Body() createInstitutionCategoryDto: CreateInstitutionCategoryDto) {
    return this.institutionCategoriesService.create(createInstitutionCategoryDto);
  }

  @Get()
  findAll() {
    return this.institutionCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstitutionCategoryDto: UpdateInstitutionCategoryDto) {
    return this.institutionCategoriesService.update(+id, updateInstitutionCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutionCategoriesService.remove(+id);
  }
}
