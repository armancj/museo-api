import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ReproductionConditionsService } from './reproduction-conditions.service';
import { CreateReproductionConditionDto } from './dto/create-reproduction-condition.dto';
import { UserRoles } from '../../users/enum/user-roles.enum';
import { Auth } from '../../auth/decorator';

@ApiTags('nomenclator-reproduction-conditions')
@Controller('nomenclator/reproduction-conditions')
export class ReproductionConditionsController {
  constructor(private readonly service: ReproductionConditionsService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })  
  @Post()
  @ApiOperation({ summary: 'Create reproduction condition' })
  create(@Body() createDto: CreateReproductionConditionDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all reproduction conditions' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get reproduction condition by UUID' })
  @ApiParam({ name: 'uuid', description: 'Reproduction condition UUID' })
  findOne(@Param('uuid') uuid: string) {
    return this.service.findOne(uuid);
  }
  
  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update reproduction condition' })
  @ApiParam({ name: 'uuid', description: 'Reproduction condition UUID' })
  update(@Param('uuid') uuid: string, @Body() updateDto: CreateReproductionConditionDto) {
    return this.service.update(uuid, updateDto);
  }
  
  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete reproduction condition' })
  @ApiParam({ name: 'uuid', description: 'Reproduction condition UUID' })
  remove(@Param('uuid') uuid: string) {
    return this.service.remove(uuid);
  }
}
