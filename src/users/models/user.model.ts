import { NonFunctionProperties } from "../../common/interfaces/manipulate-properties";


export interface UploadedFile {
  id: string;
  nameFile: string;
  file?: string;
}


export interface UserModel {
  uuid?: string;
  name: string;
  lastName: string;
  email: string;
  dni?: string;
  avatar?: UploadedFile;
  dateOfBirth?: Date;
  accountNumber?: string;
  socialSecurity?: string;
  nationality?: string;
  address?: string;
  province?: string;
  mobile?: string;
  zipCode?: string;
  observations?: string;
  passwordHashed: string;
  roles?: string;
  active?: boolean;
  deleted?: boolean;
  forgotUid?: string;
  isEmailValid?: boolean;
  approvalStatus?: string;
  referralSource?: string;
}


export type UserPropertiesModel = NonFunctionProperties<UserModel>;

