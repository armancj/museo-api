import { BaseModel } from '../../../common/interfaces/base.model';

export interface TypologyModel extends BaseModel {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  uuid: string;
  deleted: boolean;
}