import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { EntryAndLocationRecordService } from './entry-and-location-record.service';
import { CreateEntryAndLocationRecordDto } from './dto/create-entry-and-location-record.dto';
import { UpdateEntryAndLocationRecordDto } from './dto/update-entry-and-location-record.dto';
import { EntryAndLocationRecord } from './entities/entry-and-location-record.entity';
import { LocationEntity } from './entities/location.entity';
import {Auth, CurrentUser} from "../../auth/decorator";
import {User} from "../../users/entities/user.entity";

@Auth()
@ApiTags('EntryLocationRecord')
@Controller('entry-and-location-record')
export class EntryAndLocationRecordController {
  constructor(
    private readonly entryAndLocationRecordService: EntryAndLocationRecordService,
  ) {}

  /**
   * Creates or updates an entry and location record.
   *
   * @param uuid The uuid of the entry and location record to update or create.
   * @param createEntryAndLocationRecordDto The data to create or update an entry and location record.
   * @param user
   * @returns The created or updated entry and location record entity.
   */
  @Put(':uuid')
  @ApiOperation({
    summary: 'Create or update an entry and location record by uuid',
  })
  @ApiResponse({
    status: 200,
    description: 'Entry and location record created or updated successfully',
    type: EntryAndLocationRecord,
  })
  @ApiResponse({ status: 400, description: 'Invaluuid input' })
  @ApiBody({ type: CreateEntryAndLocationRecordDto })
  createOrUpdate(
    @Param('uuid') uuid: string,
    @Body() createEntryAndLocationRecordDto: CreateEntryAndLocationRecordDto,
    @CurrentUser() user: User,
  ) {
    return this.entryAndLocationRecordService.create(
      uuid,
      createEntryAndLocationRecordDto,
      user
    );
  }

  /**
   * Retrieves all entry and location records.
   *
   * @returns A list of entry and location records.
   */
  @Get()
  @ApiOperation({ summary: 'Retrieve all entry and location records' })
  @ApiResponse({
    status: 200,
    description: 'List of entry and location records',
    type: [LocationEntity],
  })
  findAll() {
    return this.entryAndLocationRecordService.findAll();
  }

  /**
   * Retrieves an entry and location record by uuid.
   *
   * @param uuid The uuid of the entry and location record.
   * @returns The entry and location record entity.
   */
  @Get(':uuid')
  @ApiOperation({ summary: 'Retrieve an entry and location record by uuid' })
  @ApiResponse({
    status: 200,
    description: 'Entry and location record retrieved successfully',
    type: EntryAndLocationRecord,
  })
  @ApiResponse({
    status: 404,
    description: 'Entry and location record not found',
  })
  findOne(@Param('uuid') uuid: string) {
    return this.entryAndLocationRecordService.findOne(uuid);
  }

  /**
   * Updates an entry and location record by uuid.
   *
   * @param uuid The uuid of the entry and location record.
   * @param updateEntryAndLocationRecordDto The data to update the entry and location record.
   * @returns The updated entry and location record entity.
   */
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update an entry and location record by uuid' })
  @ApiResponse({
    status: 200,
    description: 'Entry and location record updated successfully',
    type: EntryAndLocationRecord,
  })
  @ApiResponse({ status: 400, description: 'Invaluuid input' })
  update(
    @Param('uuid') uuid: string,
    @Body() updateEntryAndLocationRecordDto: UpdateEntryAndLocationRecordDto,
  ) {
    return this.entryAndLocationRecordService.update(
      uuid,
      updateEntryAndLocationRecordDto,
    );
  }

  /**
   * Deletes an entry and location record by uuid.
   *
   * @param uuid The uuid of the entry and location record.
   * @returns A success message.
   */
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete an entry and location record by uuid' })
  @ApiResponse({
    status: 204,
    description: 'Entry and location record deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Entry and location record not found',
  })
  remove(@Param('uuid') uuid: string) {
    return this.entryAndLocationRecordService.remove(uuid);
  }
}
