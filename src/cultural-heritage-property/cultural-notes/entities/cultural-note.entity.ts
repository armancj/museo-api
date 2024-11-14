import { NotesModel } from '../models/cultural-notes-model';

export class CulturalNote implements NotesModel {
  notes: string;

  constructor(option: Partial<NotesModel>) {
    this.notes = option.notes;
  }
}
