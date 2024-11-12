import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProducerAuthorRecordService } from './producer-author-record.service';
import { CreateProducerAuthorRecordDto } from './dto/create-producer-author-record.dto';
import { UpdateProducerAuthorRecordDto } from './dto/update-producer-author-record.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('ProducerAuthorRecord')
@Controller('producer-author-record')
export class ProducerAuthorRecordController {
  constructor(private readonly producerAuthorRecordService: ProducerAuthorRecordService) {}

  @Post()
  create(@Body() createProducerAuthorRecordDto: CreateProducerAuthorRecordDto) {
    return this.producerAuthorRecordService.create(createProducerAuthorRecordDto);
  }

  @Get()
  findAll() {
    return this.producerAuthorRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producerAuthorRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProducerAuthorRecordDto: UpdateProducerAuthorRecordDto) {
    return this.producerAuthorRecordService.update(+id, updateProducerAuthorRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producerAuthorRecordService.remove(+id);
  }
}
