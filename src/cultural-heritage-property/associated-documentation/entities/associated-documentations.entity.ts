import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedAssociatedDocumentationEntity } from './extended-associated-documentation.entity';
import { AssociatedDocumentationEntity } from './associated-documentation.entity';
import { AssociatedDocumentationModel } from '../models/associated-documentation-model';

/**
 * Entity class for managing a collection of associated documentations.
 */
export class AssociatedDocumentationsEntity {
  /**
   * Initializes the entity with partial data including an optional UUID.
   *
   * @param value A partial object containing documentation data and UUID.
   */
  public constructor(
    public value: Partial<AssociatedDocumentationModel & { uuid: string }>,
  ) {}

  /**
   * Factory method to create an array of `ExtendedAssociatedDocumentationEntity` instances.
   *
   * This method filters the input data to only include items with associated documentation
   * and maps each item to an instance of `ExtendedAssociatedDocumentationEntity`.
   *
   * @param value Array of `CulturalPropertyModel` containing associated documentation data.
   * @returns An array of `ExtendedAssociatedDocumentationEntity` instances.
   * @throws {TypeError} If the input is not an array.
   */
  public static create(
    value: CulturalPropertyModel[],
  ): ExtendedAssociatedDocumentationEntity[] {
    if (!Array.isArray(value))
      throw new TypeError('Input in associatedDocumentation is not an array');

    return value
      .filter((data) => data.associatedDocumentation)
      .map((data) => {
        const { uuid, associatedDocumentation } = data;
        return {
          uuid,
          ...AssociatedDocumentationEntity.create(associatedDocumentation),
        };
      });
  }
}
