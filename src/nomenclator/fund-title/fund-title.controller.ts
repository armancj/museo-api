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

@ApiTags('fund-title')
@Controller('fund-title')
export class FundTitleController {
  constructor(private readonly fundTitleService: FundTitleService) {}

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

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateFundTitleDto: UpdateFundTitleDto,
  ) {
    return this.fundTitleService.update(uuid, updateFundTitleDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.fundTitleService.remove(uuid);
  }
}