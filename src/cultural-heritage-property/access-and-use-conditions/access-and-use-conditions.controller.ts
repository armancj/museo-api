import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiBody,
} from '@nestjs/swagger';
import { CreateAccessAndUseConditionDto } from './dto/create-access-and-use-condition.dto';
import { UpdateAccessAndUseConditionDto } from './dto/update-access-and-use-condition.dto';
import { CommonRecordService } from '../shared/common-record-service.service';
import { AccessAndUseCondition } from './entities/access-and-use-condition.entity';
import { AccessAndUseConditionsEntity } from './entities/access-and-use-conditions.entity';

/**
 * Controller for managing access and use conditions.
 */
@ApiTags('access-conditions')
@Controller('access-and-use-conditions')
export class AccessAndUseConditionsController {
  constructor(
    @Inject('ACCESS_AND_USE_CONDITIONS_SERVICE')
    private readonly accessAndUseConditionsService: CommonRecordService<
      any,
      CreateAccessAndUseConditionDto,
      AccessAndUseCondition,
      AccessAndUseConditionsEntity
    >,
  ) {}

  /**
   * Creates or replaces an access condition.
   * @param uuid - Unique identifier of the resource.
   * @param createAccessAndUseConditionDto - Data transfer object for creation.
   */
  @Put(':uuid')
  @ApiOperation({ summary: 'Create or replace an access condition' })
  @ApiBody({ type: CreateAccessAndUseConditionDto })
  @ApiCreatedResponse({
    description: 'Successfully created or replaced the record.',
    type: AccessAndUseCondition,
  })
  @ApiNotFoundResponse({ description: 'Resource not found.' })
  create(
    @Param('uuid') uuid: string,
    @Body() createAccessAndUseConditionDto: CreateAccessAndUseConditionDto,
  ) {
    return this.accessAndUseConditionsService.create(
      uuid,
      createAccessAndUseConditionDto,
    );
  }

  /**
   * Retrieves all access conditions.
   */
  @Get()
  @ApiOperation({ summary: 'Retrieve all access conditions' })
  @ApiOkResponse({
    description: 'Records retrieved successfully.',
    type: [AccessAndUseConditionsEntity],
  })
  findAll() {
    return this.accessAndUseConditionsService.findAll();
  }

  /**
   * Retrieves an access condition by UUID.
   * @param uuid - Unique identifier of the resource.
   */
  @Get(':uuid')
  @ApiOperation({ summary: 'Retrieve an access condition by UUID' })
  @ApiOkResponse({
    description: 'Record retrieved successfully.',
    type: AccessAndUseCondition,
  })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  findOne(@Param('uuid') uuid: string) {
    return this.accessAndUseConditionsService.findOne(uuid);
  }

  /**
   * Updates an access condition.
   * @param uuid - Unique identifier of the resource.
   * @param updateAccessAndUseConditionDto - Data transfer object for update.
   */
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update access conditions' })
  @ApiNoContentResponse({ description: 'Record updated successfully.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  @ApiBody({ type: UpdateAccessAndUseConditionDto })
  update(
    @Param('uuid') uuid: string,
    @Body() updateAccessAndUseConditionDto: UpdateAccessAndUseConditionDto,
  ) {
    return this.accessAndUseConditionsService.update(
      uuid,
      updateAccessAndUseConditionDto,
    );
  }

  /**
   * Deletes an access condition.
   * @param uuid - Unique identifier of the resource.
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete access conditions' })
  @ApiNoContentResponse({ description: 'Record deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  remove(@Param('uuid') uuid: string) {
    return this.accessAndUseConditionsService.remove(uuid);
  }
}
