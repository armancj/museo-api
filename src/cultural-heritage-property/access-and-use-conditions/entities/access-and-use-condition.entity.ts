import { AccessAndUseConditionsModel } from '../models/access-and-use-conditions';
import { FieldReviewStatusEntity } from '../../field-review-status/entities/field-review-status.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  FieldMetadataDtoForArrayString,
  FieldMetadataDtoForString,
} from '../../field-review-status/dto/field-metadata-string.dto';
import { FieldMetadata } from '../../field-review-status/models/field-review-status.model';

/**
 * The `AccessAndUseCondition` class represents access and use conditions
 * for an entity, including access conditions, reproduction conditions,
 * and technical requirements.
 * Implements the `AccessAndUseConditionsModel` interface.
 */
export class AccessAndUseCondition implements AccessAndUseConditionsModel {
  /** List of access conditions. */
  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  accessConditions: FieldMetadata<string[]>;

  @ApiProperty({ type: FieldMetadataDtoForArrayString })
  /** List of reproduction conditions. */
  reproductionConditions: FieldMetadata<string[]>;

  @ApiProperty({ type: FieldMetadataDtoForString })
  /** Technical requirements needed for access. */
  technicalRequirements: FieldMetadata<string>;

  /**
   * Constructor for the `AccessAndUseCondition` class.
   *
   * @param option - Partial object of type `AccessAndUseConditionsModel` to initialize the properties.
   */
  constructor(option: Partial<AccessAndUseConditionsModel>) {
    this.accessConditions = FieldReviewStatusEntity.create(
      option.accessConditions,
    );
    this.reproductionConditions = FieldReviewStatusEntity.create(
      option.reproductionConditions,
    );
    this.technicalRequirements = FieldReviewStatusEntity.create(
      option.technicalRequirements,
    );
  }

  /**
   * Factory method to create a new instance of `AccessAndUseCondition`.
   *
   * @param option - Complete object of type `AccessAndUseConditionsModel`.
   * @returns A new instance of `AccessAndUseCondition`.
   */
  static create(option: AccessAndUseConditionsModel): AccessAndUseCondition {
    return new AccessAndUseCondition(option);
  }
}
