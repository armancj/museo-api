import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntryAndLocationRecordService } from './entry-and-location-record.service';
import { CreateEntryAndLocationRecordDto } from './dto/create-entry-and-location-record.dto';
import { UpdateEntryAndLocationRecordDto } from './dto/update-entry-and-location-record.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('EntryLocationRecord')
@Controller('entry-and-location-record')
export class EntryAndLocationRecordController {
  constructor(
    private readonly entryAndLocationRecordService: EntryAndLocationRecordService,
  ) {}

  @Post()
  create(
    @Body() createEntryAndLocationRecordDto: CreateEntryAndLocationRecordDto,
  ) {
    return this.entryAndLocationRecordService.create(
      createEntryAndLocationRecordDto,
    );
  }

  @Get()
  findAll() {
    return this.entryAndLocationRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entryAndLocationRecordService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntryAndLocationRecordDto: UpdateEntryAndLocationRecordDto,
  ) {
    return this.entryAndLocationRecordService.update(
      +id,
      updateEntryAndLocationRecordDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entryAndLocationRecordService.remove(+id);
  }
}
