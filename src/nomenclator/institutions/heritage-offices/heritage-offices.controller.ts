import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeritageOfficesService } from './heritage-offices.service';
import { CreateHeritageOfficeDto } from './dto/create-heritage-office.dto';
import { UpdateHeritageOfficeDto } from './dto/update-heritage-office.dto';

@Controller('heritage-offices')
export class HeritageOfficesController {
  constructor(private readonly heritageOfficesService: HeritageOfficesService) {}

  @Post()
  create(@Body() createHeritageOfficeDto: CreateHeritageOfficeDto) {
    return this.heritageOfficesService.create(createHeritageOfficeDto);
  }

  @Get()
  findAll() {
    return this.heritageOfficesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heritageOfficesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeritageOfficeDto: UpdateHeritageOfficeDto) {
    return this.heritageOfficesService.update(+id, updateHeritageOfficeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heritageOfficesService.remove(+id);
  }
}
