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
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { FilterSectionDto } from './dto/filter-section.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('section')
@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Get()
  findAll(@Query() filter: FilterSectionDto) {
    return this.sectionService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.sectionService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return this.sectionService.update(uuid, updateSectionDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.sectionService.remove(uuid);
  }
}
