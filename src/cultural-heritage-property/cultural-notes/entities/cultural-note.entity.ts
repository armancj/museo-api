import { NotesModel } from '../models/cultural-notes-model';

export class CulturalNoteEntity implements NotesModel {
  notes: string;

  constructor(option: Partial<NotesModel>) {
    this.notes = option.notes;
  }

  static create(option: Partial<NotesModel>): CulturalNoteEntity {
    return new CulturalNoteEntity(option);
  }
}
