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
import { EntryFormService } from './entry-form.service';
import { CreateEntryFormDto } from './dto/create-entry-form.dto';
import { UpdateEntryFormDto } from './dto/update-entry-form.dto';
import { FilterEntryFormDto } from './dto/filter-entry-form.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('entry-form')
@Controller('entry-form')
export class EntryFormController {
  constructor(private readonly entryFormService: EntryFormService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  create(@Body() createEntryFormDto: CreateEntryFormDto) {
    return this.entryFormService.create(createEntryFormDto);
  }

  @Get()
  findAll(@Query() filter: FilterEntryFormDto) {
    return this.entryFormService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.entryFormService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateEntryFormDto: UpdateEntryFormDto,
  ) {
    return this.entryFormService.update(uuid, updateEntryFormDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.entryFormService.remove(uuid);
  }
}
