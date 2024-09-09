import { NonFunctionProperties } from "../../common/interfaces/manipulate-properties";
import {UserRoles} from "../enum/user-roles.enum";


export interface UploadedFile {
  id: string;
  nameFile: string;
  file?: string;
}


export interface UserModel {
  uuid: string;
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
  roles?: UserRoles;
  active?: boolean;
  deleted?: boolean;
}


export type UserPropertiesModel = NonFunctionProperties<UserModel>;

