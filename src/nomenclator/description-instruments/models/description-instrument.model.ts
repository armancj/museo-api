import { BaseModel } from '../../../common/interfaces/base.model';

export interface DescriptionInstrumentModel extends BaseModel {
  name: string;
  description: string;
  active?: boolean;
}
