import {BaseModel} from "../../../common/interfaces/base.model";
import {NonFunctionProperties} from "../../../common/interfaces/manipulate-properties";


export interface ProvinceModel extends BaseModel {
  name: string;
  country: string;
}

export type ProvincePropertiesModel = NonFunctionProperties<ProvinceModel>;
