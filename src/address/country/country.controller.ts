import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Query,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';
import {FilterCountryByNameDto} from "./dto/filter-country-by-name.dto";

@ApiTags('Country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Auth()
  @Get()
  findAll(@Query() filter: FilterCountryByNameDto) {
    return this.countryService.findAll(filter);
  }

  @Auth()
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.countryService.findOne(uuid);
  }

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    return this.countryService.update(uuid, updateCountryDto);
  }

  @Auth({ roles: [UserRoles.administrator, UserRoles.superAdmin] })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.countryService.remove(uuid);
  }
}
