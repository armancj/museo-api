import { CulturalNoteEntity } from './cultural-note.entity';
import { NotesModel } from '../models/cultural-notes-model';

export class ExtendedCulturalNoteEntity extends CulturalNoteEntity {
  uuid: string;

  constructor(option: Partial<NotesModel & { uuid: string }>) {
    super(option);
  }
  static create(
    option: Partial<NotesModel & { uuid: string }>,
  ): ExtendedCulturalNoteEntity {
    return new ExtendedCulturalNoteEntity(option);
  }
}
