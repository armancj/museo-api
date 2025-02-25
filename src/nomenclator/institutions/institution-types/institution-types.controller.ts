import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionTypesService } from './institution-types.service';
import { CreateInstitutionTypeDto } from './dto/create-institution-type.dto';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';

@Controller('institution-types')
export class InstitutionTypesController {
  constructor(private readonly institutionTypesService: InstitutionTypesService) {}

  @Post()
  create(@Body() createInstitutionTypeDto: CreateInstitutionTypeDto) {
    return this.institutionTypesService.create(createInstitutionTypeDto);
  }

  @Get()
  findAll() {
    return this.institutionTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstitutionTypeDto: UpdateInstitutionTypeDto) {
    return this.institutionTypesService.update(+id, updateInstitutionTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutionTypesService.remove(+id);
  }
}
