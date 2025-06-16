import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CategoryMuseumService } from './category-museum.service';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { FilterCategoryMuseumDto } from './dto/filter-category-museum.dto';

@ApiTags('Category Museum')
@Controller('category-museum')
export class CategoryMuseumController {
  constructor(private readonly categoryMuseumService: CategoryMuseumService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  create(@Body() createCategoryMuseumDto: CreateCategoryMuseumDto) {
    return this.categoryMuseumService.create(createCategoryMuseumDto);
  }

  @Get()
  findAll(@Query() filterCategoryMuseum: FilterCategoryMuseumDto) {
    return this.categoryMuseumService.findAll(filterCategoryMuseum);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.categoryMuseumService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryMuseumDto: UpdateCategoryMuseumDto) {
    return this.categoryMuseumService.update(uuid, updateCategoryMuseumDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.categoryMuseumService.remove(uuid);
  }
}
