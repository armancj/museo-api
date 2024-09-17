import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query,
} from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Municipality')
@Controller('municipality')
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Post()
  create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalityService.create(createMunicipalityDto);
  }

  @Get()
  findAll(@Query() filter: UpdateMunicipalityDto) {
    return this.municipalityService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string, @Query() filter: UpdateMunicipalityDto) {
    return this.municipalityService.findOne(uuid, filter);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateMunicipalityDto: UpdateMunicipalityDto,
  ) {
    return this.municipalityService.update(uuid, updateMunicipalityDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.municipalityService.remove(uuid);
  }
}
