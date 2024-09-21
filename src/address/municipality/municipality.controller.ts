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
import { MunicipalityService } from './municipality.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('Municipality')
@Controller('municipality')
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Post()
  create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalityService.create(createMunicipalityDto);
  }

  @Auth()
  @Get()
  findAll(@Query() filter: UpdateMunicipalityDto) {
    return this.municipalityService.findAll(filter);
  }

  @Auth()
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string, @Query() filter: UpdateMunicipalityDto) {
    return this.municipalityService.findOne(uuid, filter);
  }

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateMunicipalityDto: UpdateMunicipalityDto,
  ) {
    return this.municipalityService.update(uuid, updateMunicipalityDto);
  }

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.municipalityService.remove(uuid);
  }
}
