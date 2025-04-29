import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedCulturalNoteEntity } from './extended-cultural-note.entity';
import { CulturalNoteEntity } from './cultural-note.entity';

/**
 * Entity representing a collection of cultural notes.
 *
 * This class handles the aggregation of cultural notes data extracted from an array of `CulturalPropertyModel`.
 */
export class CulturalNotesEntity {
  /**
   * Initializes a new instance of `CulturalNotesEntity`.
   *
   * @param value - Array of `CulturalPropertyModel` containing cultural properties with potential notes.
   */
  public constructor(public value: ExtendedCulturalNoteEntity[]) {}

  /**
   * Factory method to create an array of `ExtendedCulturalNoteEntity`.
   *
   * Filters the input array to include only cultural properties that have notes and maps them to instances of `ExtendedCulturalNoteEntity`.
   *
   * @param value - Array of `CulturalPropertyModel`.
   * @returns An array of `ExtendedCulturalNoteEntity`.
   * @throws {TypeError} If the input is not an array.
   */
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
