import {NonFunctionProperties} from "../../common/interfaces/manipulate-properties";


export interface AuthModel {
  uuid: string;
  currentHashedRefreshToken?: string;
  email?: string;
  code?: number;
}

export type AuthPropertiesModel = NonFunctionProperties<AuthModel>;
