import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedCulturalNoteEntity } from './extended-cultural-note.entity';
import { CulturalNoteEntity } from './cultural-note.entity';

export class CulturalNotesEntity {
  private constructor(public value: CulturalPropertyModel[]) {}

  public static create(
    value: CulturalPropertyModel[],
  ): ExtendedCulturalNoteEntity[] {
    if (!Array.isArray(value))
      throw new TypeError('Input in producer author is not an array');

    return value
      .filter((data) => data.notes)
      .map((data) => {
        const { uuid, notes } = data;
        return { uuid, ...CulturalNoteEntity.create(notes) };
      });
  }
}
