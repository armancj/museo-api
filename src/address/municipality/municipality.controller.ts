import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';

@Controller('municipality')
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Post()
  create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalityService.create(createMunicipalityDto);
  }

  @Get()
  findAll() {
    return this.municipalityService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.municipalityService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateMunicipalityDto: UpdateMunicipalityDto) {
    return this.municipalityService.update(uuid, updateMunicipalityDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.municipalityService.remove(uuid);
  }
}
