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
import { ConservationStatusService } from './conservation-status.service';
import { CreateConservationStatusDto } from './dto/create-conservation-status.dto';
import { UpdateConservationStatusDto } from './dto/update-conservation-status.dto';
import { FilterConservationStatusDto } from './dto/filter-conservation-status.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('conservation-status')
@Controller('conservation-status')
export class ConservationStatusController {
  constructor(
    private readonly conservationStatusService: ConservationStatusService,
  ) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  create(@Body() createConservationStatusDto: CreateConservationStatusDto) {
    return this.conservationStatusService.create(createConservationStatusDto);
  }

  @Get()
  findAll(@Query() filter: FilterConservationStatusDto) {
    return this.conservationStatusService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.conservationStatusService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateConservationStatusDto: UpdateConservationStatusDto,
  ) {
    return this.conservationStatusService.update(
      uuid,
      updateConservationStatusDto,
    );
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.conservationStatusService.remove(uuid);
  }
}
