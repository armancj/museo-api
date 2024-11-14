import { Inject, Injectable } from '@nestjs/common';
import { CreateAssociatedDocumentationDto } from './dto/create-associated-documentation.dto';
import { UpdateAssociatedDocumentationDto } from './dto/update-associated-documentation.dto';
import { CommonRecordService } from '../shared/common-record-service.service';
import { AssociatedDocumentationEntity } from './entities/associated-documentation.entity';
import { AssociatedDocumentationsEntity } from './entities/associated-documentations.entity';
@Injectable()
export class AssociatedDocumentationService {
  constructor(
    @Inject('ASSOCIATED_DOCUMENTATION_SERVICE')
    private readonly commonRecordService: CommonRecordService<
      any,
      CreateAssociatedDocumentationDto,
      AssociatedDocumentationEntity,
      AssociatedDocumentationsEntity
    >,
  ) {}
  create(
    uuid: string,
    createAssociatedDocumentationDto: CreateAssociatedDocumentationDto,
  ) {
    return this.commonRecordService.create(
      uuid,
      createAssociatedDocumentationDto,
    );
  }

  findAll() {
    return this.commonRecordService.findAll();
  }

  findOne(uuid: string) {
    return this.commonRecordService.findOne(uuid);
  }

  update(
    uuid: string,
    updateAssociatedDocumentationDto: UpdateAssociatedDocumentationDto,
  ) {
    return this.commonRecordService.update(
      uuid,
      updateAssociatedDocumentationDto,
    );
  }

  remove(uuid: string) {
    return this.commonRecordService.remove(uuid);
  }
}
