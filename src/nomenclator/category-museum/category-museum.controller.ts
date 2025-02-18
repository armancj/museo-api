import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryMuseumService } from './category-museum.service';
import { CreateCategoryMuseumDto } from './dto/create-category-museum.dto';
import { UpdateCategoryMuseumDto } from './dto/update-category-museum.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Category Museum')
@Controller('category-museum')
export class CategoryMuseumController {
  constructor(private readonly categoryMuseumService: CategoryMuseumService) {}

  @Post()
  create(@Body() createCategoryMuseumDto: CreateCategoryMuseumDto) {
    return this.categoryMuseumService.create(createCategoryMuseumDto);
  }

  @Get()
  findAll() {
    return this.categoryMuseumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryMuseumService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryMuseumDto: UpdateCategoryMuseumDto,
  ) {
    return this.categoryMuseumService.update(+id, updateCategoryMuseumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryMuseumService.remove(+id);
  }
}
