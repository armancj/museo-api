import { BaseModel } from '../../../common/interfaces/base.model';

export interface AccessConditionModel extends BaseModel {
  type: string;
  description?: string;
}
