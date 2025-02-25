import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DescriptionUnitsService } from './description-units.service';
import { CreateDescriptionUnitDto } from './dto/create-description-unit.dto';
import { UpdateDescriptionUnitDto } from './dto/update-description-unit.dto';

@Controller('description-units')
export class DescriptionUnitsController {
  constructor(private readonly descriptionUnitsService: DescriptionUnitsService) {}

  @Post()
  create(@Body() createDescriptionUnitDto: CreateDescriptionUnitDto) {
    return this.descriptionUnitsService.create(createDescriptionUnitDto);
  }

  @Get()
  findAll() {
    return this.descriptionUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDescriptionUnitDto: UpdateDescriptionUnitDto) {
    return this.descriptionUnitsService.update(+id, updateDescriptionUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionUnitsService.remove(+id);
  }
}
