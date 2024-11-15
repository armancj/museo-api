import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { DescriptionControlService } from './description-control.service';
import { CreateDescriptionControlDto } from './dto/create-description-control.dto';
import { UpdateDescriptionControlDto } from './dto/update-description-control.dto';
import { DescriptionControlsEntity } from './entities/description-controls.entity';

/**
 * Controller for managing description controls.
 *
 * Provides endpoints to create, retrieve, update, and delete description control records.
 */
@ApiTags('Description Control')
@Controller('description-control')
export class DescriptionControlController {
  constructor(
    private readonly descriptionControlService: DescriptionControlService,
  ) {}

  /**
   * Creates a new description control record.
   *
   * @param uuid - Unique identifier for the description control.
   * @param createDescriptionControlDto - DTO with the data required to create a description control.
   * @returns The newly created description control record.
   */
  @ApiOperation({ summary: 'Create a description control' })
  @ApiResponse({
    status: 201,
    description: 'Description control created successfully.',
  })
  @ApiParam({
    name: 'uuid',
    description: 'Unique identifier for the description control',
  })
  @ApiBody({ type: CreateDescriptionControlDto })
  @Put(':uuid')
  create(
    @Param('uuid') uuid: string,
    @Body() createDescriptionControlDto: CreateDescriptionControlDto,
  ) {
    return this.descriptionControlService.create(
      uuid,
      createDescriptionControlDto,
    );
  }

  /**
   * Retrieves all description control records.
   *
   * @returns An array of all description control records.
   */
  @ApiOperation({ summary: 'Get all description controls' })
  @ApiResponse({
    status: 200,
    description: 'List of description controls retrieved successfully.',
  })
  @Get()
  findAll() {
    return this.descriptionControlService.findAll();
  }

  /**
   * Retrieves a single description control record by its UUID.
   *
   * @param uuid - Unique identifier of the description control to retrieve.
   * @returns The description control record identified by the given UUID.
   */
  @ApiOperation({ summary: 'Get a description control by UUID' })
  @ApiResponse({
    status: 200,
    description: 'Description control retrieved successfully.',
  })
  @ApiParam({
    name: 'uuid',
    description: 'Unique identifier of the description control to retrieve',
  })
  @ApiBody({ type: DescriptionControlsEntity })
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.descriptionControlService.findOne(uuid);
  }

  /**
   * Updates an existing description control record by its UUID.
   *
   * @param uuid - Unique identifier of the description control to update.
   * @param updateDescriptionControlDto - DTO with the updated data for the description control.
   * @returns The updated description control record.
   */
  @ApiOperation({ summary: 'Update a description control by UUID' })
  @ApiResponse({
    status: 200,
    description: 'Description control updated successfully.',
  })
  @ApiParam({
    name: 'uuid',
    description: 'Unique identifier of the description control to update',
  })
  @ApiBody({ type: UpdateDescriptionControlDto })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateDescriptionControlDto: UpdateDescriptionControlDto,
  ) {
    return this.descriptionControlService.update(
      uuid,
      updateDescriptionControlDto,
    );
  }

  /**
   * Deletes a description control record by its UUID.
   *
   * @param uuid - Unique identifier of the description control to delete.
   * @returns A confirmation message upon successful deletion.
   */
  @ApiOperation({ summary: 'Delete a description control by UUID' })
  @ApiResponse({
    status: 204,
    description: 'Description control deleted successfully.',
  })
  @ApiParam({
    name: 'uuid',
    description: 'Unique identifier of the description control to delete',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.descriptionControlService.remove(uuid);
  }
}
