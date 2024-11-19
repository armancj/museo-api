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
import {Auth, CurrentUser} from '../../auth/decorator';
import {User} from "../../users/entities/user.entity";

@Auth()
@ApiTags('Institution')
@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  create(@Body() createInstitutionDto: CreateInstitutionDto,  @CurrentUser() user: User,) {
    return this.institutionsService.create(createInstitutionDto, user);
  }

  @Get()
  findAll() {
    return this.institutionsService.findAll();
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.institutionsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
  ) {
    return this.institutionsService.update(uuid, updateInstitutionDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.institutionsService.remove(uuid);
  }
}
