import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MuseumTypesService } from './museum-types.service';
import { CreateMuseumTypeDto } from './dto/create-museum-type.dto';
import { UpdateMuseumTypeDto } from './dto/update-museum-type.dto';

@Controller('museum-types')
export class MuseumTypesController {
  constructor(private readonly museumTypesService: MuseumTypesService) {}

  @Post()
  create(@Body() createMuseumTypeDto: CreateMuseumTypeDto) {
    return this.museumTypesService.create(createMuseumTypeDto);
  }

  @Get()
  findAll() {
    return this.museumTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.museumTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMuseumTypeDto: UpdateMuseumTypeDto) {
    return this.museumTypesService.update(+id, updateMuseumTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.museumTypesService.remove(+id);
  }
}
