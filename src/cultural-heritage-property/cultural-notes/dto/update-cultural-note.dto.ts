import { PartialType } from '@nestjs/mapped-types';
import { CreateCulturalNoteDto } from './create-cultural-note.dto';

export class UpdateCulturalNoteDto extends PartialType(CreateCulturalNoteDto) {}
