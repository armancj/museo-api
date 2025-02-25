import { Injectable, Inject } from '@nestjs/common';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CreateCulturalRecordDto } from './dto/create-cultural-record.dto';
import { UpdateCulturalRecordDto } from './dto/update-cultural-record.dto';
import { CulturalRecordEntity } from './entities/cultural-record.entity';
import { CulturalRecordsEntity } from './entities/cultural-records.entity';

@Injectable()
export class CulturalRecordService {
  constructor(
    @Inject('CULTURAL_RECORD_SERVICE')
    private readonly commonRecordService: CommonRecordService<
      any,
      CreateCulturalRecordDto,
      CulturalRecordEntity,
      CulturalRecordsEntity
    >,
  ) {}

  /**
   * Creates a new cultural record, passing the UUID to associate the record.
   *
   * @param uuid The UUID for the new cultural record.
   * @param createCulturalRecordDto Data to create the cultural record.
   * @returns The created cultural record.
   */
  create(uuid: string, createCulturalRecordDto: CreateCulturalRecordDto) {
    return this.commonRecordService.create(uuid, createCulturalRecordDto);
  }

  /**
   * Retrieves all cultural records.
   *
   * @returns List of all cultural records.
   */
  findAll() {
    return this.commonRecordService.findAll();
  }

  /**
   * Retrieves a cultural record by UUID.
   *
   * @param uuid The UUID of the cultural record to find.
   * @returns The cultural record found.
   */
  findOne(uuid: string) {
    return this.commonRecordService.findOne(uuid);
  }

  /**
   * Updates an existing cultural record by UUID.
   *
   * @param uuid The UUID of the cultural record to update.
   * @param updateCulturalRecordDto The updated data.
   * @returns The updated cultural record.
   */
  update(uuid: string, updateCulturalRecordDto: UpdateCulturalRecordDto) {
    return this.commonRecordService.update(uuid, updateCulturalRecordDto);
  }

  /**
   * Removes a cultural record by UUID.
   *
   * @param uuid The UUID of the cultural record to remove.
   * @returns A message indicating the removal.
   */
  remove(uuid: string) {
    return this.commonRecordService.remove(uuid);
  }
}
