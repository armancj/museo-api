import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubordinationService } from './subordination.service';
import { CreateSubordinationDto } from './dto/create-subordination.dto';
import { UpdateSubordinationDto } from './dto/update-subordination.dto';

@Controller('subordination')
export class SubordinationController {
  constructor(private readonly subordinationService: SubordinationService) {}

  @Post()
  create(@Body() createSubordinationDto: CreateSubordinationDto) {
    return this.subordinationService.create(createSubordinationDto);
  }

  @Get()
  findAll() {
    return this.subordinationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subordinationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubordinationDto: UpdateSubordinationDto) {
    return this.subordinationService.update(+id, updateSubordinationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subordinationService.remove(+id);
  }
}
