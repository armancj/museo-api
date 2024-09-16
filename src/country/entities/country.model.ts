import { NonFunctionProperties } from '../../common/interfaces/manipulate-properties';
import { BaseModel } from '../../common/interfaces/base.model';

export interface CountryModel extends BaseModel {
  name: string;
}

export type CountryPropertiesModel = NonFunctionProperties<CountryModel>;