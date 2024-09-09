import { NonFunctionProperties } from "../../common/interfaces/manipulate-properties";


export interface UploadedFile {
  id: string;
  nameFile: string;
  file?: string;
}


export interface UserModel {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  mobile: string;
  passwordHashed: string;
  avatar?: UploadedFile;
  address?: string;
  nationality?: string;
  province?: string;
  municipal?: string;
  roles?: string;
  active?: boolean;
  deleted?: boolean;
}


export type UserPropertiesModel = NonFunctionProperties<UserModel>;

