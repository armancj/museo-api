import { NonFunctionProperties } from '../../common/interfaces/manipulate-properties';
import { BaseModel } from '../../common/interfaces/base.model';

export interface ProvinceModel extends BaseModel {
  name: string;
  country: string;
}

export type ProvincePropertiesModel = NonFunctionProperties<ProvinceModel>;
