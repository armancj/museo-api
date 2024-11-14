import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociatedDocumentationDto } from './create-associated-documentation.dto';

export class UpdateAssociatedDocumentationDto extends PartialType(CreateAssociatedDocumentationDto) {}
