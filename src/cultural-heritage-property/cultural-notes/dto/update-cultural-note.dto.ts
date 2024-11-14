import { PartialType } from '@nestjs/swagger';
import { CreateCulturalNoteDto } from './create-cultural-note.dto';

export class UpdateCulturalNoteDto extends PartialType(CreateCulturalNoteDto) {}
