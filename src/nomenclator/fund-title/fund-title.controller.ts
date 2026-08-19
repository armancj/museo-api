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
import { FundTitleService } from './fund-title.service';
import { CreateFundTitleDto } from './dto/create-fund-title.dto';
import { UpdateFundTitleDto } from './dto/update-fund-title.dto';
import { FilterFundTitleDto } from './dto/filter-fund-title.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('fund-title')
@Controller('fund-title')
export class FundTitleController {
  constructor(private readonly fundTitleService: FundTitleService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  create(@Body() createFundTitleDto: CreateFundTitleDto) {
    return this.fundTitleService.create(createFundTitleDto);
  }

  @Get()
  findAll(@Query() filter: FilterFundTitleDto) {
    return this.fundTitleService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.fundTitleService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateFundTitleDto: UpdateFundTitleDto,
  ) {
    return this.fundTitleService.update(uuid, updateFundTitleDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.fundTitleService.remove(uuid);
  }
}
