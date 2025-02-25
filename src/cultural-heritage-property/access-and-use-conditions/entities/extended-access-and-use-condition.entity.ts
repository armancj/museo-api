import { AccessAndUseCondition } from './access-and-use-condition.entity';
import { AccessAndUseConditionsModel } from '../models/access-and-use-conditions';

/**
 * Extended entity for access and use conditions that includes a unique identifier (UUID).
 *
 * Extends `AccessAndUseCondition` to add the UUID property.
 */
export class ExtendedAccessAndUseConditionEntity extends AccessAndUseCondition {
  /** Unique identifier for the extended access and use condition entity. */
  uuid: string;

  /**
   * Constructor for `ExtendedAccessAndUseConditionEntity`.
   *
   * @param option - Partial object of type `AccessAndUseConditionsModel` with an additional `uuid` property.
   */
  constructor(option: Partial<AccessAndUseConditionsModel & { uuid: string }>) {
    super(option);
    this.uuid = option.uuid;
  }

  /**
   * Factory method to create a new instance of `ExtendedAccessAndUseConditionEntity`.
   *
   * @param option - Partial object containing access and use conditions along with a `uuid`.
   * @returns A new instance of `ExtendedAccessAndUseConditionEntity`.
   */
  static create(
    option: Partial<AccessAndUseConditionsModel & { uuid: string }>,
  ): ExtendedAccessAndUseConditionEntity {
    return new ExtendedAccessAndUseConditionEntity(option);
  }
}
