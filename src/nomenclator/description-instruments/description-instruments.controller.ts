import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DescriptionInstrumentsService } from './description-instruments.service';
import { CreateDescriptionInstrumentDto } from './dto/create-description-instrument.dto';
import { UpdateDescriptionInstrumentDto } from './dto/update-description-instrument.dto';
import { Auth } from '../../auth/decorator';
import { UserRoles } from '../../users/enum/user-roles.enum';

@ApiTags('Description Instruments')
@Controller('description-instruments')
export class DescriptionInstrumentsController {
  constructor(
    private readonly descriptionInstrumentsService: DescriptionInstrumentsService,
  ) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Post()
  @ApiOperation({ summary: 'Create a new description instrument' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(
    @Body() createDescriptionInstrumentDto: CreateDescriptionInstrumentDto,
  ) {
    return this.descriptionInstrumentsService.create(
      createDescriptionInstrumentDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all description instruments' })
  findAll() {
    return this.descriptionInstrumentsService.findAll();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get a description instrument by ID' })
  @ApiResponse({ status: 404, description: 'Description instrument not found' })
  findOne(@Param('uuid') uuid: string) {
    return this.descriptionInstrumentsService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update a description instrument by ID' })
  @ApiResponse({ status: 404, description: 'Description instrument not found' })
  update(
    @Param('uuid') uuid: string,
    @Body() updateDescriptionInstrumentDto: UpdateDescriptionInstrumentDto,
  ) {
    return this.descriptionInstrumentsService.update(
      uuid,
      updateDescriptionInstrumentDto,
    );
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a description instrument by ID' })
  @ApiResponse({ status: 404, description: 'Description instrument not found' })
  remove(@Param('uuid') uuid: string) {
    return this.descriptionInstrumentsService.remove(uuid);
  }
}
