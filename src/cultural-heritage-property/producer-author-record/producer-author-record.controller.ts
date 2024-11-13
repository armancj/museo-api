import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Put, HttpCode, HttpStatus
} from "@nestjs/common";
import { ProducerAuthorRecordService } from './producer-author-record.service';
import { CreateProducerAuthorRecordDto } from './dto/create-producer-author-record.dto';
import { UpdateProducerAuthorRecordDto } from './dto/update-producer-author-record.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ProducerAuthorRecord')
@Controller('producer-author-record')
export class ProducerAuthorRecordController {
  constructor(
    private readonly producerAuthorRecordService: ProducerAuthorRecordService,
  ) {}

  @Put(':uuid')
  create(
    @Param('uuid') uuid: string,
    @Body() createProducerAuthorRecordDto: CreateProducerAuthorRecordDto,
  ) {
    return this.producerAuthorRecordService.create(
      uuid,
      createProducerAuthorRecordDto,
    );
  }

  @Get()
  findAll() {
    return this.producerAuthorRecordService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.producerAuthorRecordService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateProducerAuthorRecordDto: UpdateProducerAuthorRecordDto,
  ) {
    return this.producerAuthorRecordService.update(
      uuid,
      updateProducerAuthorRecordDto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.producerAuthorRecordService.remove(uuid);
  }
}
