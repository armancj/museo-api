import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreationDetailsService } from './creation-details.service';
import { CreateCreationDetailDto } from './dto/create-creation-detail.dto';
import { UpdateCreationDetailDto } from './dto/update-creation-detail.dto';

@Controller('creation-details')
export class CreationDetailsController {
  constructor(private readonly creationDetailsService: CreationDetailsService) {}

  @Post()
  create(@Body() createCreationDetailDto: CreateCreationDetailDto) {
    return this.creationDetailsService.create(createCreationDetailDto);
  }

  @Get()
  findAll() {
    return this.creationDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creationDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreationDetailDto: UpdateCreationDetailDto) {
    return this.creationDetailsService.update(+id, updateCreationDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creationDetailsService.remove(+id);
  }
}
