import {
  UploadedFile,
  UserModel,
  UserPropertiesModel,
} from '../models/user.model';
import { Exclude } from 'class-transformer';

export class User implements UserModel {
  readonly uuid?: string;
  readonly socialSecurity?: string;
  readonly dni?: string;
  readonly email: string;
  readonly mobile?: string;
  readonly zipCode?: string;
  readonly accountNumber?: string;
  readonly address?: string;
  readonly dateOfBirth?: Date;
  readonly lastName: string;
  readonly name: string;
  readonly nationality?: string;
  readonly observations?: string;
  readonly province?: string;
  readonly avatar?: UploadedFile;
  readonly dniFaceA?: UploadedFile;
  readonly dniFaceB?: UploadedFile;
  readonly roles?: string;
  readonly approvalStatus: string;
  readonly referralSource?: string;

  @Exclude()
  readonly passwordHashed: string;

  readonly active?: boolean;

  @Exclude()
  readonly deleted?: boolean;

  @Exclude()
  readonly forgotUid?: string;

  @Exclude()
  readonly isEmailValid?: boolean;

  constructor(options: UserPropertiesModel) {
  }
}


