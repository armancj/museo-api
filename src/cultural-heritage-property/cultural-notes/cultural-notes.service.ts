import { Inject, Injectable } from '@nestjs/common';
import { CommonRecordService } from '../shared/common-record-service.service';
import { CreateCulturalNoteDto } from './dto/create-cultural-note.dto';
import { UpdateCulturalNoteDto } from './dto/update-cultural-note.dto';
import { AssociatedDocumentationEntity } from '../associated-documentation/entities/associated-documentation.entity';
import { AssociatedDocumentationsEntity } from '../associated-documentation/entities/associated-documentations.entity';

@Injectable()
export class CulturalNotesService {
  constructor(
    @Inject('CULTURAL_NOTES_SERVICE')
    private readonly commonRecordService: CommonRecordService<
      any,
      CreateCulturalNoteDto,
      AssociatedDocumentationEntity,
      AssociatedDocumentationsEntity
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
