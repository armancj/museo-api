import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestDataService } from './test-data.service';
import { CreateTestDatumDto } from './dto/create-test-datum.dto';
import { UpdateTestDatumDto } from './dto/update-test-datum.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test Data')
@Controller('test-data')
export class TestDataController {
  constructor(private readonly testDataService: TestDataService) {}

  @Post()
  create(@Body() createTestDatumDto: CreateTestDatumDto) {
    return this.testDataService.create(createTestDatumDto);
  }

  @Get()
  findAll() {
    return this.testDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestDatumDto: UpdateTestDatumDto,
  ) {
    return this.testDataService.update(+id, updateTestDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testDataService.remove(+id);
  }
}
