import { BaseModel } from "../../../common/interfaces/base.model";
import { ReproductionCondition } from "../../common/enums/reproduction-condition.enum";

export interface ReproductionConditionModel extends BaseModel {
  type: ReproductionCondition;
  description?: string;
}