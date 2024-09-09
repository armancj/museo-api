import {
  UploadedFile,
  UserModel,
  UserPropertiesModel,
} from '../models/user.model';

export class User implements UserModel {
  _id: string;
  mobile: string;
  municipal: string;
  readonly email: string;
  readonly address?: string;
  readonly lastName: string;
  readonly name: string;
  readonly nationality?: string;
  readonly province?: string;
  readonly avatar?: UploadedFile;
  readonly roles?: string;
  readonly passwordHashed: string;
  readonly active?: boolean;
  readonly deleted?: boolean;

  constructor(options: UserPropertiesModel) {
    Object.assign(this as UserModel, options);
  }

  updateUserInfo(updatedInfo: Partial<UserPropertiesModel>): void {
    Object.assign(this as UserModel, updatedInfo);
  }

  isActive(): boolean {
    return this.active ?? false;
  }


  isDeleted(): boolean {
    return this.deleted ?? false;
  }

  static create(options: UserPropertiesModel): User {
    return new User(options);
  }
}



