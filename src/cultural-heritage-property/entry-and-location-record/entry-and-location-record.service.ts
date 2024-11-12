import { Injectable } from '@nestjs/common';
import { CreateEntryAndLocationRecordDto } from './dto/create-entry-and-location-record.dto';
import { UpdateEntryAndLocationRecordDto } from './dto/update-entry-and-location-record.dto';

@Injectable()
export class EntryAndLocationRecordService {
  create(createEntryAndLocationRecordDto: CreateEntryAndLocationRecordDto) {
    return 'This action adds a new entryAndLocationRecord';
  }

  findAll() {
    return `This action returns all entryAndLocationRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entryAndLocationRecord`;
  }

  update(
    id: number,
    updateEntryAndLocationRecordDto: UpdateEntryAndLocationRecordDto,
  ) {
    return `This action updates a #${id} entryAndLocationRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} entryAndLocationRecord`;
  }
}
