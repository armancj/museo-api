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
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('heritage-type')
@Controller('heritage-type')
export class HeritageTypeController {
  constructor(private readonly heritageTypeService: HeritageTypeService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
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

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateHeritageTypeDto: UpdateHeritageTypeDto,
  ) {
    return this.heritageTypeService.update(uuid, updateHeritageTypeDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.heritageTypeService.remove(uuid);
  }
}