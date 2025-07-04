import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CulturalHeritagePropertyService } from './cultural-heritage-property.service';
import { CreateCulturalPropertyDto } from './dto/create-cultural-property.dto';
import { Auth, CurrentUser } from '../../auth/decorator';
import { JwtPayload } from '../../auth/strategies/jwt.payload';

@ApiTags('CulturalProperty')
@Controller('cultural-heritage-property')
export class CulturalHeritagePropertyController {
  constructor(private readonly culturalHeritagePropertyService: CulturalHeritagePropertyService) {}

  @Auth()
  @Post()
  async create(@Body() createCulturalPropertyDto: CreateCulturalPropertyDto) {
    return this.culturalHeritagePropertyService.created(createCulturalPropertyDto);
  }

  @Auth()
  @Get()
  async find(@CurrentUser() user: JwtPayload) {
    return this.culturalHeritagePropertyService.find(user);
  }

  @Auth()
  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    return this.culturalHeritagePropertyService.findOne(uuid);
  }

  @Get('public/:uuid')
  async findOnePublic(@Param('uuid') uuid: string) {
    return this.culturalHeritagePropertyService.findOne(uuid);
  }

  @Auth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    return this.culturalHeritagePropertyService.remove(uuid);
  }

  @Auth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('permanent/:uuid')
  async removePermanent(@Param('uuid') uuid: string) {
    return this.culturalHeritagePropertyService.removePermanent(uuid);
  }
}
