import { FieldMetadataDto } from '../../field-review-status/dto/field-metadata.dto';
import { AccessAndUseConditionsModel } from '../models/access-and-use-conditions';

/**
 * Represents the access and use conditions of a resource.
 *
 * Implements the `AccessAndUseConditionsModel` interface, providing structure
 * for access conditions, reproduction conditions, and technical requirements.
 */
export class AccessAndUseCondition implements AccessAndUseConditionsModel {
  /** List of access conditions. */
  accessConditions: FieldMetadataDto<string[]>;

  /** List of reproduction conditions. */
  reproductionConditions: FieldMetadataDto<string[]>;

  /** Technical requirements needed for access. */
  technicalRequirements: FieldMetadataDto<string>;

  /**
   * Constructor for the `AccessAndUseCondition` class.
   *
   * @param option - Partial object of type `AccessAndUseConditionsModel` to initialize the properties.
   */
  constructor(option: Partial<AccessAndUseConditionsModel>) {
    this.accessConditions = option.accessConditions;
    this.reproductionConditions = option.reproductionConditions;
    this.technicalRequirements = option.technicalRequirements;
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
