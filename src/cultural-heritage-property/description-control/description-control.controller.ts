import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DescriptionControlService } from './description-control.service';
import { CreateDescriptionControlDto } from './dto/create-description-control.dto';
import { UpdateDescriptionControlDto } from './dto/update-description-control.dto';

@Controller('description-control')
export class DescriptionControlController {
  constructor(private readonly descriptionControlService: DescriptionControlService) {}

  @Post()
  create(@Body() createDescriptionControlDto: CreateDescriptionControlDto) {
    return this.descriptionControlService.create(createDescriptionControlDto);
  }

  @Get()
  findAll() {
    return this.descriptionControlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descriptionControlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDescriptionControlDto: UpdateDescriptionControlDto) {
    return this.descriptionControlService.update(+id, updateDescriptionControlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descriptionControlService.remove(+id);
  }
}
