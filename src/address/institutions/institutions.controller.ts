import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth, CurrentUser } from '../../auth/decorator';
import { JwtPayload } from '../../auth/strategies/jwt.payload';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('Institution')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin],
  })
  @Post()
  create(
    @Body() createInstitutionDto: CreateInstitutionDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.institutionsService.create(createInstitutionDto, user);
  }

  @Auth()
  @Get()
  findAll(@CurrentUser() user: JwtPayload) {
    return this.institutionsService.findAll(user);
  }

  @Auth()
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string, @CurrentUser() user: JwtPayload) {
    return this.institutionsService.findOne(uuid, user);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin, UserRoles.manager],
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.institutionsService.update(uuid, updateInstitutionDto, user);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin, UserRoles.manager],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string, @CurrentUser() user: JwtPayload) {
    return this.institutionsService.remove(uuid, user);
  }
}
