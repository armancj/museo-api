import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtraInformationService } from './extra-information.service';
import { CreateExtraInformationDto } from './dto/create-extra-information.dto';
import { UpdateExtraInformationDto } from './dto/update-extra-information.dto';

@Controller('extra-information')
export class ExtraInformationController {
  constructor(private readonly extraInformationService: ExtraInformationService) {}

  @Post()
  create(@Body() createExtraInformationDto: CreateExtraInformationDto) {
    return this.extraInformationService.create(createExtraInformationDto);
  }

  @Get()
  findAll() {
    return this.extraInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extraInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtraInformationDto: UpdateExtraInformationDto) {
    return this.extraInformationService.update(+id, updateExtraInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extraInformationService.remove(+id);
  }
}
