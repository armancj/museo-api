import { Inject, Injectable } from '@nestjs/common';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';
import { CulturalNoteEntity } from './entities/cultural-note.entity';
import { CulturalNotesEntity } from './entities/cultural-notes.entity';

@Injectable()
export class CulturalNotesService {
  constructor(
    @Inject('CULTURAL_NOTES_SERVICE')
    private readonly commonRecordService: CommonRecordService<
      any,
      CreateCulturalNoteDto,
      CulturalNoteEntity,
      CulturalNotesEntity
    >,
  ) {}
  create(uuid: string, commonDto: CreateCulturalNoteDto) {
    return this.commonRecordService.create(uuid, commonDto);
  }

  findAll() {
    return this.commonRecordService.findAll();
  }

  findOne(uuid: string) {
    return this.commonRecordService.findOne(uuid);
  }

  update(uuid: string, commonDto: UpdateCulturalNoteDto) {
    return this.commonRecordService.update(uuid, commonDto);
  }

  remove(uuid: string) {
    return this.commonRecordService.remove(uuid);
  }
}
