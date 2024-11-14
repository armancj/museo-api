import { CulturalPropertyModel } from '../../cultural-heritage-property/models/cultural-property.model';
import { ExtendedAssociatedDocumentationEntity } from './extended-associated-documentation.entity';
import { AssociatedDocumentationEntity } from './associated-documentation.entity';
import { AssociatedDocumentationModel } from '../models/associated-documentation-model';

export class AssociatedDocumentationsEntity {
  private constructor(
    public value: Partial<AssociatedDocumentationModel & { uuid: string }>,
  ) {}

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
