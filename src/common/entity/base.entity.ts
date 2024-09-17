import { BaseModel } from '../interfaces/base.model';
import { Expose } from 'class-transformer';

export class BaseEntity implements BaseModel {
  @Expose()
  createdAt: Date;

  deleted: boolean;

  @Expose()
  updatedAt: Date;

  @Expose()
  uuid: string;
}
