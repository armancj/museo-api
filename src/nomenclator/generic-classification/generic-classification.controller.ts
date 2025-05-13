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
import { GenericClassificationService } from './generic-classification.service';
import { CreateGenericClassificationDto } from './dto/create-generic-classification.dto';
import { UpdateGenericClassificationDto } from './dto/update-generic-classification.dto';
import { FilterGenericClassificationDto } from './dto/filter-generic-classification.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('generic-classification')
@Controller('generic-classification')
export class GenericClassificationController {
  constructor(
    private readonly genericClassificationService: GenericClassificationService,
  ) {}

  @Post()
  create(
    @Body() createGenericClassificationDto: CreateGenericClassificationDto,
  ) {
    return this.genericClassificationService.create(
      createGenericClassificationDto,
    );
  }

  @Get()
  findAll(@Query() filter: FilterGenericClassificationDto) {
    return this.genericClassificationService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.genericClassificationService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateGenericClassificationDto: UpdateGenericClassificationDto,
  ) {
    return this.genericClassificationService.update(
      uuid,
      updateGenericClassificationDto,
    );
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.genericClassificationService.remove(uuid);
  }
}
