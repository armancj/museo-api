import { Inject, Injectable } from '@nestjs/common';
import { CreateAssociatedDocumentationDto } from './dto/create-associated-documentation.dto';
import { UpdateAssociatedDocumentationDto } from './dto/update-associated-documentation.dto';
import { CommonRecordService } from '../shared/common-record-service.service';
import { AssociatedDocumentationEntity } from './entities/associated-documentation.entity';
import { AssociatedDocumentationsEntity } from './entities/associated-documentations.entity';
@Injectable()
export class AssociatedDocumentationService {
  constructor(
    @Inject('ACCESS_AND_USE_CONDITIONS_SERVICE')
    private readonly accessAndUseConditionsService: CommonRecordService<
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
    return this.accessAndUseConditionsService.create(
      uuid,
      createAssociatedDocumentationDto,
    );
  }

  findAll() {
    return this.accessAndUseConditionsService.findAll();
  }

  findOne(uuid: string) {
    return this.accessAndUseConditionsService.findOne(uuid);
  }

  update(
    uuid: string,
    updateAssociatedDocumentationDto: UpdateAssociatedDocumentationDto,
  ) {
    return this.accessAndUseConditionsService.update(
      uuid,
      updateAssociatedDocumentationDto,
    );
  }

  remove(uuid: string) {
    return this.accessAndUseConditionsService.remove(uuid);
  }
}
