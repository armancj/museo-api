import { Injectable } from '@nestjs/common';
import { CreateAssociatedDocumentationDto } from './dto/create-associated-documentation.dto';
import { UpdateAssociatedDocumentationDto } from './dto/update-associated-documentation.dto';

@Injectable()
export class AssociatedDocumentationService {
  create(uuid: string, createAssociatedDocumentationDto: CreateAssociatedDocumentationDto) {
    return 'This action adds a new associatedDocumentation';
  }

  findAll() {
    return `This action returns all associatedDocumentation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associatedDocumentation`;
  }

  update(
    id: number,
    updateAssociatedDocumentationDto: UpdateAssociatedDocumentationDto,
  ) {
    return `This action updates a #${id} associatedDocumentation`;
  }

  remove(id: number) {
    return `This action removes a #${id} associatedDocumentation`;
  }
}
