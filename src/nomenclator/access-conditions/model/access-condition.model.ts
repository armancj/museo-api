import { BaseModel } from "../../../common/interfaces/base.model";
import { AccessCondition } from "../../common/enums/access-condition.enum";

export interface AccessConditionModel extends BaseModel {
  type: AccessCondition;
  description?: string;
} 