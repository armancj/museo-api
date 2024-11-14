/**
 * Interface representing the model for access and use conditions.
 */
export interface AccessAndUseConditionsModel {

  /** List of conditions required for accessing the resource. */
  accessConditions: string[];

  /** List of conditions required for reproducing the resource. */
  reproductionConditions: string[];

  /** Technical requirements needed for accessing the resource. */
  technicalRequirements: string;
}
