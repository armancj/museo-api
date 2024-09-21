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
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('Province')
@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Post()
  create(@Body() createProvinceDto: CreateProvinceDto) {
    return this.provinceService.create(createProvinceDto);
  }

  @Auth()
  @Get()
  findAll(@Query() filter: UpdateProvinceDto) {
    return this.provinceService.findAll(filter);
  }

  @Auth()
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string, @Query() filter: UpdateProvinceDto) {
    return this.provinceService.findOne(uuid, filter);
  }

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateProvinceDto: UpdateProvinceDto,
  ) {
    return this.provinceService.update(uuid, updateProvinceDto);
  }

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.provinceService.remove(uuid);
  }
}
