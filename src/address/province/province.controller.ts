import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query,
} from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Province')
@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post()
  create(@Body() createProvinceDto: CreateProvinceDto) {
    return this.provinceService.create(createProvinceDto);
  }

  @Get()
  findAll(@Query() filter: UpdateProvinceDto) {
    return this.provinceService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string, @Query() filter: UpdateProvinceDto) {
    return this.provinceService.findOne(uuid, filter);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateProvinceDto: UpdateProvinceDto,
  ) {
    return this.provinceService.update(uuid, updateProvinceDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.provinceService.remove(uuid);
  }
}
