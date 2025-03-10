import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AccessConditionsService } from './access-conditions.service';
import { CreateAccessConditionDto } from './dto/create-access-condition.dto';

@ApiTags('nomenclator-access-conditions')
@Controller('nomenclator/access-conditions')
export class AccessConditionsController {
  constructor(private readonly service: AccessConditionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create access condition' })
  create(@Body() createDto: CreateAccessConditionDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all access conditions' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get access condition by id' })
  findOne(@Param('uuid') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':uuid')
  @ApiOperation({ summary: 'Update access condition' })
  update(@Param('uuid') id: string, @Body() updateDto: CreateAccessConditionDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete access condition' })
  remove(@Param('uuid') id: string) {
    return this.service.remove(id);
  }
}
