import { BaseModel } from '../../../common/interfaces/base.model';

export interface TypologyModel extends BaseModel {
  name: string;
  description?: string;
  active?: boolean;
}
