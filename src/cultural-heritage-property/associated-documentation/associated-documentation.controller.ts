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
import { AssociatedDocumentationService } from './associated-documentation.service';
import { CreateAssociatedDocumentationDto } from './dto/create-associated-documentation.dto';
import { UpdateAssociatedDocumentationDto } from './dto/update-associated-documentation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

/**
 * Controller for managing associated documentation.
 * Provides endpoints for creating, retrieving, updating, and deleting documentation data.
 */
@ApiTags('AssociatedDocumentation')
@Controller('associated-documentation')
export class AssociatedDocumentationController {
  constructor(
    private readonly associatedDocumentationService: AssociatedDocumentationService,
  ) {}

  /**
   * Creates a new associated documentation record.
   *
   * @param uuid
   * @param {CreateAssociatedDocumentationDto} createAssociatedDocumentationDto - DTO for creating documentation.
   * @returns The created documentation record.
   */
  @Put(':uuid')
  @ApiOperation({ summary: 'Create a new associated documentation record' })
  @ApiParam({
    name: 'uuid',
    type: String,
    description: 'UUID of the documentation record',
  })
  @ApiResponse({
    status: 201,
    description: 'The associated documentation has been successfully created.',
  })
  create(
    @Param('uuid') uuid: string,
    @Body() createAssociatedDocumentationDto: CreateAssociatedDocumentationDto,
  ) {
    return this.associatedDocumentationService.create(
      createAssociatedDocumentationDto,
    );
  }

  /**
   * Retrieves all associated documentation records.
   *
   * @returns A list of all documentation records.
   */
  @Get()
  @ApiOperation({ summary: 'Retrieve all associated documentation records' })
  @ApiResponse({
    status: 200,
    description: 'List of associated documentation records',
  })
  findAll() {
    return this.associatedDocumentationService.findAll();
  }

  /**
   * Retrieves a specific associated documentation record by UUID.
   *
   * @param {string} uuid - The UUID of the documentation record to retrieve.
   * @returns The requested documentation record.
   */
  @Get(':uuid')
  @ApiOperation({
    summary: 'Retrieve an associated documentation record by UUID',
  })
  @ApiParam({
    name: 'uuid',
    type: String,
    description: 'UUID of the documentation record',
  })
  @ApiResponse({
    status: 200,
    description: 'The associated documentation record',
  })
  @ApiResponse({
    status: 404,
    description: 'Documentation record not found',
  })
  findOne(@Param('uuid') uuid: string) {
    return this.associatedDocumentationService.findOne(uuid);
  }

  /**
   * Updates an existing associated documentation record by UUID.
   *
   * @param {string} uuid - The UUID of the documentation record to update.
   * @param {UpdateAssociatedDocumentationDto} updateAssociatedDocumentationDto - DTO for updating documentation.
   * @returns The updated documentation record.
   */
  @Patch(':uuid')
  @ApiOperation({
    summary: 'Update an existing associated documentation record by UUID',
  })
  @ApiParam({
    name: 'uuid',
    type: String,
    description: 'UUID of the documentation record',
  })
  @ApiResponse({
    status: 200,
    description: 'The updated associated documentation record',
  })
  @ApiResponse({
    status: 404,
    description: 'Documentation record not found',
  })
  update(
    @Param('uuid') uuid: string,
    @Body() updateAssociatedDocumentationDto: UpdateAssociatedDocumentationDto,
  ) {
    return this.associatedDocumentationService.update(
      uuid,
      updateAssociatedDocumentationDto,
    );
  }

  /**
   * Deletes an associated documentation record by UUID.
   *
   * @param {string} uuid - The UUID of the documentation record to delete.
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':uuid')
  @ApiOperation({
    summary: 'Delete an associated documentation record by UUID',
  })
  @ApiParam({
    name: 'uuid',
    type: String,
    description: 'UUID of the documentation record',
  })
  @ApiResponse({
    status: 204,
    description:
      'The associated documentation record has been successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Documentation record not found',
  })
  remove(@Param('uuid') uuid: string) {
    return this.associatedDocumentationService.remove(uuid);
  }
}
