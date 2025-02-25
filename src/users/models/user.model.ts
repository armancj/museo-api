import { NonFunctionProperties } from '../../common/interfaces/manipulate-properties';
import { UserRoles } from '../enum/user-roles.enum';
import {InstitutionModel} from "../../address/institutions/entities/institution.model";

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
  institutionId?: string;
  institution?: InstitutionModel;
}

export type UserPropertiesModel = NonFunctionProperties<UserModel>;
