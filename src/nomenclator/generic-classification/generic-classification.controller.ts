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
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('generic-classification')
@Controller('generic-classification')
export class GenericClassificationController {
  constructor(
    private readonly genericClassificationService: GenericClassificationService,
  ) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
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

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
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

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.genericClassificationService.remove(uuid);
  }
}
