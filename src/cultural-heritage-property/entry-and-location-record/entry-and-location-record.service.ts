import { Injectable, Inject } from '@nestjs/common';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CreateEntryAndLocationRecordDto } from './dto/create-entry-and-location-record.dto';
import { UpdateEntryAndLocationRecordDto } from './dto/update-entry-and-location-record.dto';
import { EntryAndLocationRecord } from './entities/entry-and-location-record.entity';
import { EntryAndLocationRecordsEntity } from './entities/entry-and-location-records.entity';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class EntryAndLocationRecordService {
    constructor(
        @Inject('ENTRY_AND_LOCATION_RECORD_SERVICE')
        private readonly commonRecordService: CommonRecordService<
            any,
            CreateEntryAndLocationRecordDto,
            EntryAndLocationRecord,
            EntryAndLocationRecordsEntity
        >,
    ) {
    }

    /**
     * Creates a new entry and location record, passing the uuid to associate the record.
     *
     * @param uuid The uuid for the new entry and location record.
     * @param createEntryAndLocationRecordDto Data to create the entry and location record.
     * @param user
     * @returns The created entry and location record.
     */
    create(
        uuid: string, createEntryAndLocationRecordDto: CreateEntryAndLocationRecordDto, user: User,
  ) {
    return this.commonRecordService.create(uuid, createEntryAndLocationRecordDto, user);
  }

  /**
   * Retrieves all entry and location records.
   *
   * @returns List of all entry and location records.
   */
  findAll() {
    return this.commonRecordService.findAll();
  }

  /**
   * Retrieves an entry and location record by uuid.
   *
   * @param uuid The uuid of the entry and location record to find.
   * @returns The entry and location record found.
   */
  findOne(uuid: string) {
    return this.commonRecordService.findOne(uuid);
  }

  /**
   * Updates an existing entry and location record by uuid.
   *
   * @param uuid The uuid of the entry and location record to update.
   * @param updateEntryAndLocationRecordDto The updated data.
   * @returns The updated entry and location record.
   */
  update(
    uuid: string,
    updateEntryAndLocationRecordDto: UpdateEntryAndLocationRecordDto,
  ) {
    return this.commonRecordService.update(
      uuid,
      updateEntryAndLocationRecordDto,
    );
  }

  /**
   * Removes an entry and location record by uuid.
   *
   * @param uuid The uuid of the entry and location record to remove.
   * @returns A message indicating the removal.
   */
  remove(uuid: string) {
    return this.commonRecordService.remove(uuid);
  }
}
