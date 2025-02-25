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
import { CulturalRecordService } from './cultural-record.service';
import { CreateCulturalRecordDto } from './dto/create-cultural-record.dto';
import { UpdateCulturalRecordDto } from './dto/update-cultural-record.dto';
import { CulturalRecordEntity } from './entities/cultural-record.entity';
import { ExtendedCulturalRecordEntity } from './entities/extended-cultural-record.entity';

@ApiTags('CulturalRecord')
@Controller('cultural-record')
export class CulturalRecordController {
  constructor(private readonly culturalRecordService: CulturalRecordService) {}

  /**
   * Updates or creates a cultural record.
   *
   * @param uuid The UUID of the cultural record to update or create.
   * @param createCulturalRecordDto The data to create or update a cultural record.
   * @returns The created or updated cultural record entity.
   */
  @Put(':uuid')
  @ApiOperation({ summary: 'Create or update a cultural record by UUID' })
  @ApiResponse({
    status: 200,
    description: 'Cultural record created or updated successfully',
    type: CulturalRecordEntity,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: CreateCulturalRecordDto })
  createOrUpdate(
    @Param('uuid') uuid: string,
    @Body() createCulturalRecordDto: CreateCulturalRecordDto,
  ) {
    return this.culturalRecordService.create(uuid, createCulturalRecordDto);
  }

  /**
   * Retrieves all cultural records.
   *
   * @returns A list of cultural records.
   */
  @Get()
  @ApiOperation({ summary: 'Retrieve all cultural records' })
  @ApiResponse({
    status: 200,
    description: 'List of cultural records',
    type: [ExtendedCulturalRecordEntity],
  })
  findAll() {
    return this.culturalRecordService.findAll();
  }

  /**
   * Retrieves a cultural record by UUID.
   *
   * @param uuid The UUID of the cultural record.
   * @returns The cultural record entity.
   */
  @Get(':uuid')
  @ApiOperation({ summary: 'Retrieve a cultural record by UUID' })
  @ApiResponse({
    status: 200,
    description: 'Cultural record retrieved successfully',
    type: CulturalRecordEntity,
  })
  @ApiResponse({ status: 404, description: 'Cultural record not found' })
  findOne(@Param('uuid') uuid: string) {
    return this.culturalRecordService.findOne(uuid);
  }

  /**
   * Updates a cultural record by UUID.
   *
   * @param uuid The UUID of the cultural record.
   * @param updateCulturalRecordDto The data to update the cultural record.
   * @returns The updated cultural record entity.
   */
  @Patch(':uuid')
  @ApiOperation({ summary: 'Update a cultural record by UUID' })
  @ApiResponse({
    status: 200,
    description: 'Cultural record updated successfully',
    type: CulturalRecordEntity,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  update(
    @Param('uuid') uuid: string,
    @Body() updateCulturalRecordDto: UpdateCulturalRecordDto,
  ) {
    return this.culturalRecordService.update(uuid, updateCulturalRecordDto);
  }

  /**
   * Deletes a cultural record by UUID.
   *
   * @param uuid The UUID of the cultural record.
   * @returns A success message.
   */
  @Delete(':uuid')
  @ApiOperation({ summary: 'Delete a cultural record by UUID' })
  @ApiResponse({
    status: 204,
    description: 'Cultural record deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Cultural record not found' })
  remove(@Param('uuid') uuid: string) {
    return this.culturalRecordService.remove(uuid);
  }
}
