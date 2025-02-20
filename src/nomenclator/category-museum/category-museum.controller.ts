import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryMuseumService } from './category-museum.service';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator/auth.decorator';

@ApiTags('Category Museum')
@Controller('category-museum')
export class CategoryMuseumController {
  constructor(private readonly categoryMuseumService: CategoryMuseumService) {}

  @Auth()
  @Post()
  create(@Body() createCategoryMuseumDto: CreateCategoryMuseumDto) {
    return this.categoryMuseumService.create(createCategoryMuseumDto);
  }

  @Auth()
  @Get()
  findAll() {
    return this.categoryMuseumService.findAll();
  }

  @Auth()
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.categoryMuseumService.findOne(uuid);
  }

  @Auth()
  @Patch(':uuid')
  update(@Param('uuid') uuid: string, @Body() updateCategoryMuseumDto: UpdateCategoryMuseumDto) {
    return this.categoryMuseumService.update(uuid, updateCategoryMuseumDto);
  }

  @Auth()
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.categoryMuseumService.remove(uuid);
  }
}
