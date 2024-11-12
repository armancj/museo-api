import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CulturalRecordService } from './cultural-record.service';
import { CreateCulturalRecordDto } from './dto/create-cultural-record.dto';
import { UpdateCulturalRecordDto } from './dto/update-cultural-record.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('CulturalRecord')
@Controller('cultural-record')
export class CulturalRecordController {
  constructor(private readonly culturalRecordService: CulturalRecordService) {}

  @Post()
  create(@Body() createCulturalRecordDto: CreateCulturalRecordDto) {
    return this.culturalRecordService.create(createCulturalRecordDto);
  }

  @Get()
  findAll() {
    return this.culturalRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.culturalRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCulturalRecordDto: UpdateCulturalRecordDto) {
    return this.culturalRecordService.update(+id, updateCulturalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.culturalRecordService.remove(+id);
  }
}
