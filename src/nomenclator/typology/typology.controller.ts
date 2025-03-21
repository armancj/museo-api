import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TypologyService } from './typology.service';
import { TypologyModel } from './model/typology.model';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { CreateTypologyDto } from './dto/create-typology.dto';
import { UpdateTypologyDto } from './dto/update-typology.dto';

@ApiTags('Typology')
@Controller('typology')
export class TypologyController {
  constructor(private readonly typologyService: TypologyService) {}

  @Post()
  @ApiOperation({ summary: 'Create typology' })
  create(@Body() createTypologyDto: CreateTypologyDto): Promise<TypologyModel> {
    return this.typologyService.create(createTypologyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all typologies' })
  findAll(): Promise<TypologyModel[]> {
    return this.typologyService.findAll({});
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get typology by uuid' })
  findOne(@Param('uuid') uuid: string): Promise<TypologyModel> {
    return this.typologyService.findOne(uuid);
  }

  @Patch(':uuid')
  @ApiOperation({ summary: 'Update typology' })
  update(
    @Param('uuid') uuid: string,
    @Body() updateTypologyDto: UpdateTypologyDto,
  ) {
    return this.typologyService.update(uuid, updateTypologyDto);
  }

  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete typology' })
  remove(@Param('uuid') uuid: string): Promise<void> {
    return this.typologyService.remove(uuid);
  }
}
