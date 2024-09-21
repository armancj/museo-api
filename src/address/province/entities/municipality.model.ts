import { BaseModel } from '../../../common/interfaces/base.model';
import { NonFunctionProperties } from '../../../common/interfaces/manipulate-properties';

export interface MunicipalityModel extends BaseModel {
  name: string;
  province: string;
}

export type MunicipalityPropertiesModel =
  NonFunctionProperties<MunicipalityModel>;
