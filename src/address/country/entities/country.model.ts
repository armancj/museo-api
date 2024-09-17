import { BaseModel } from "../../../common/interfaces/base.model";
import { NonFunctionProperties } from "../../../common/interfaces/manipulate-properties";

export interface CountryModel extends BaseModel {
  name: string;
}

export type CountryPropertiesModel = NonFunctionProperties<CountryModel>;