import { NotesModel } from '../models/cultural-notes-model';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCulturalNoteDto implements NotesModel {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  notes?: string;
}
