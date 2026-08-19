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
import { ValueGradeService } from './value-grade.service';
import { CreateValueGradeDto } from './dto/create-value-grade.dto';
import { UpdateValueGradeDto } from './dto/update-value-grade.dto';
import { FilterValueGradeDto } from './dto/filter-value-grade.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('value-grade')
@Controller('value-grade')
export class ValueGradeController {
  constructor(private readonly valueGradeService: ValueGradeService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  create(@Body() createValueGradeDto: CreateValueGradeDto) {
    return this.valueGradeService.create(createValueGradeDto);
  }

  @Get()
  findAll(@Query() filter: FilterValueGradeDto) {
    return this.valueGradeService.findAll(filter);
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.valueGradeService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateValueGradeDto: UpdateValueGradeDto,
  ) {
    return this.valueGradeService.update(uuid, updateValueGradeDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.valueGradeService.remove(uuid);
  }
}