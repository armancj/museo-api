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
import { DescriptionInstrument } from './entities/description-instrument.entity';
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
  @ApiResponse({
    status: 201,
    description: 'The description instrument has been successfully created.',
    type: DescriptionInstrument,
  })
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
  @ApiResponse({
    status: 200,
    description: 'Return all description instruments.',
    type: [DescriptionInstrument],
  })
  findAll() {
    return this.descriptionInstrumentsService.findAll();
  }

  @Get(':uuid')
  @ApiOperation({ summary: 'Get a description instrument by ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the description instrument.',
    type: DescriptionInstrument,
  })
  @ApiResponse({ status: 404, description: 'Description instrument not found' })
  findOne(@Param('uuid') uuid: string) {
    return this.descriptionInstrumentsService.findOne(uuid);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update a description instrument by ID' })
  @ApiResponse({
    status: 200,
    description: 'The description instrument has been successfully updated.',
    type: DescriptionInstrument,
  })
  @ApiResponse({ status: 404, description: 'Description instrument not found' })
  update(
    @Param('id') id: string,
    @Body() updateDescriptionInstrumentDto: UpdateDescriptionInstrumentDto,
  ) {
    return this.descriptionInstrumentsService.update(
      id,
      updateDescriptionInstrumentDto,
    );
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.manager, UserRoles.superAdmin],
  })
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a description instrument by ID' })
  @ApiResponse({
    status: 200,
    description: 'The description instrument has been successfully deleted.',
    type: DescriptionInstrument,
  })
  @ApiResponse({ status: 404, description: 'Description instrument not found' })
  remove(@Param('uuid') uuid: string) {
    return this.descriptionInstrumentsService.remove(uuid);
  }
}
