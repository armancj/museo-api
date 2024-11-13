import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccessAndUseConditionsService } from './access-and-use-conditions.service';
import { CreateAccessAndUseConditionDto } from './dto/create-access-and-use-condition.dto';
import { UpdateAccessAndUseConditionDto } from './dto/update-access-and-use-condition.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('access-conditions')
@Controller('access-and-use-conditions')
export class AccessAndUseConditionsController {
  constructor(
    private readonly accessAndUseConditionsService: AccessAndUseConditionsService,
  ) {}

  @Post()
  create(
    @Body() createAccessAndUseConditionDto: CreateAccessAndUseConditionDto,
  ) {
    return this.accessAndUseConditionsService.create(
      createAccessAndUseConditionDto,
    );
  }

  @Get()
  findAll() {
    return this.accessAndUseConditionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessAndUseConditionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccessAndUseConditionDto: UpdateAccessAndUseConditionDto,
  ) {
    return this.accessAndUseConditionsService.update(
      +id,
      updateAccessAndUseConditionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessAndUseConditionsService.remove(+id);
  }
}
