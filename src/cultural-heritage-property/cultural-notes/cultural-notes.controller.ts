import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CulturalNotesService } from './cultural-notes.service';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import {Auth, CurrentUser} from "../../auth/decorator";
import {User} from "../../users/entities/user.entity";

/**
 * Controller to manage cultural notes.
 *
 * This controller handles CRUD operations for cultural notes associated with
 * a specific UUID. Operations include creating, retrieving, updating, and deleting notes.
 */
@Auth()
@ApiTags('cultural-notes') // Swagger decorator for grouping in Swagger UI
@Controller('cultural-notes')
export class CulturalNotesController {
  constructor(private readonly culturalNotesService: CulturalNotesService) {}

  /**
   * Creates a new cultural note for a specific UUID.
   *
   * This endpoint allows the creation of a new cultural note associated with a
   * specific cultural property identified by its UUID.
   *
   * @param uuid The UUID of the cultural property
   * @param createCulturalNoteDto The data to create the cultural note
   * @param user
   * @returns The created cultural note
   */
  @ApiOperation({ summary: 'Create a new cultural note for a specific UUID' })
  @ApiParam({ name: 'uuid', description: 'The UUID of the cultural property' })
  @ApiBody({ type: CreateCulturalNoteDto })
  @ApiResponse({
    status: 201,
    description: 'The cultural note has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @Put(':uuid')
  create(
    @Param('uuid') uuid: string,
    @Body() createCulturalNoteDto: CreateCulturalNoteDto,
    @CurrentUser() user: User,
  ) {
    return this.culturalNotesService.create(uuid, createCulturalNoteDto, user);
  }

  /**
   * Retrieves all cultural notes.
   *
   * This endpoint allows fetching all cultural notes stored in the system.
   *
   * @returns A list of cultural notes
   */
  @Auth()
  @ApiOperation({ summary: 'Get all cultural notes' })
  @ApiResponse({
    status: 200,
    description: 'List of all cultural notes',
    type: [CreateCulturalNoteDto],
  })
  @Get()
  findAll() {
    return this.culturalNotesService.findAll();
  }

  /**
   * Retrieves a cultural note by UUID.
   *
   * This endpoint fetches a cultural note associated with the given UUID.
   *
   * @param uuid The UUID of the cultural property
   * @returns The cultural note associated with the UUID
   */
  @ApiOperation({ summary: 'Get a cultural note by UUID' })
  @ApiParam({ name: 'uuid', description: 'The UUID of the cultural property' })
  @ApiResponse({
    status: 200,
    description: 'The cultural note associated with the given UUID',
    type: CreateCulturalNoteDto,
  })
  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.culturalNotesService.findOne(uuid);
  }

  /**
   * Updates an existing cultural note by UUID.
   *
   * This endpoint allows the update of a cultural note using the provided
   * UUID and updated data.
   *
   * @param uuid The UUID of the cultural property
   * @param updateCulturalNoteDto The updated data for the cultural note
   * @returns The updated cultural note
   */
  @ApiOperation({ summary: 'Update an existing cultural note by UUID' })
  @ApiParam({ name: 'uuid', description: 'The UUID of the cultural property' })
  @ApiBody({ type: UpdateCulturalNoteDto })
  @ApiResponse({
    status: 200,
    description: 'The cultural note has been successfully updated.',
    type: CreateCulturalNoteDto,
  })
  @Patch(':uuid')
  update(
    @Param('uuid') uuid: string,
    @Body() updateCulturalNoteDto: UpdateCulturalNoteDto,
  ) {
    return this.culturalNotesService.update(uuid, updateCulturalNoteDto);
  }

  /**
   * Removes a cultural note by UUID.
   *
   * This endpoint deletes the cultural note associated with the provided
   * UUID.
   *
   * @param uuid The UUID of the cultural property
   * @returns A response indicating success or failure
   */
  @ApiOperation({ summary: 'Remove a cultural note by UUID' })
  @ApiParam({ name: 'uuid', description: 'The UUID of the cultural property' })
  @ApiResponse({
    status: 204,
    description: 'The cultural note has been successfully deleted.',
  })
  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.culturalNotesService.remove(uuid);
  }
}
