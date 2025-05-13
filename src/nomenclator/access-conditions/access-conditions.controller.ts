import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { AccessConditionsService } from './access-conditions.service';
import { CreateAccessConditionDto } from './dto/create-access-condition.dto';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('nomenclator-access-conditions')
@Controller('nomenclator/access-conditions')
export class AccessConditionsController {
  constructor(private readonly service: AccessConditionsService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  @ApiOperation({ summary: 'Create access condition' })
  create(@Body() createDto: CreateAccessConditionDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all access conditions' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get access condition by UUID' })
  @ApiParam({ name: 'uuid', description: 'Access condition UUID' })
  findOne(@Param('uuid') uuid: string) {
    return this.service.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update access condition' })
  @ApiParam({ name: 'uuid', description: 'Access condition UUID' })
  update(
    @Param('uuid') uuid: string,
    @Body() updateDto: CreateAccessConditionDto,
  ) {
    return this.service.update(uuid, updateDto);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete access condition' })
  @ApiParam({ name: 'uuid', description: 'Access condition UUID' })
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid);
  }
}
