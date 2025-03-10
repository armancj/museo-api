import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ReproductionConditionsService } from './reproduction-conditions.service';
import { CreateReproductionConditionDto } from './dto/create-reproduction-condition.dto';

@ApiTags('nomenclator-reproduction-conditions')
@Controller('nomenclator/reproduction-conditions')
export class ReproductionConditionsController {
  constructor(private readonly service: ReproductionConditionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create reproduction condition' })
  create(@Body() createDto: CreateReproductionConditionDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all reproduction conditions' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get reproduction condition by id' })
  findOne(@Param('uuid') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':uuid')
  @ApiOperation({ summary: 'Update reproduction condition' })
  update(@Param('uuid') id: string, @Body() updateDto: CreateReproductionConditionDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete reproduction condition' })
  remove(@Param('uuid') id: string) {
    return this.service.remove(id);
  }
}
