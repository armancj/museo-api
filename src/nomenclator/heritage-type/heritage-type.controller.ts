import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { HeritageTypeService } from './heritage-type.service';
import { CreateHeritageTypeDto } from './dto/create-heritage-type.dto';
import { UpdateHeritageTypeDto } from './dto/update-heritage-type.dto';
import { FilterHeritageTypeDto } from './dto/filter-heritage-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('heritage-type')
@Controller('heritage-type')
export class HeritageTypeController {
  constructor(private readonly heritageTypeService: HeritageTypeService) {}

  @Post()
  create(@Body() createHeritageTypeDto: CreateHeritageTypeDto) {
    return this.heritageTypeService.create(createHeritageTypeDto);
  }

  @Get()
  findAll(@Query() filter: FilterHeritageTypeDto) {
    return this.heritageTypeService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.heritageTypeService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateHeritageTypeDto: UpdateHeritageTypeDto,
  ) {
    return this.heritageTypeService.update(uuid, updateHeritageTypeDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.heritageTypeService.remove(uuid);
  }
}