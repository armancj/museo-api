import { BaseModel } from '../../../common/interfaces/base.model';

export interface ReproductionConditionModel extends BaseModel {
  name: string;
  description?: string;
}
