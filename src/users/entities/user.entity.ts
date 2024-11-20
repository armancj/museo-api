import {
  UploadedFile,
  UserModel,
  UserPropertiesModel,
} from '../models/user.model';
import { Expose, plainToClass } from 'class-transformer';
import { UserRoles } from '../enum/user-roles.enum';
import {Institution} from "../../address/institutions/entities/institution.entity";

export class User implements UserModel {
  @Expose()
  uuid: string;

  @Expose()
  mobile: string;

  @Expose()
  municipal: string;

  @Expose()
  readonly email: string;

  @Expose()
  readonly address?: string;

  @Expose()
  readonly lastName: string;

  @Expose()
  readonly name: string;

  @Expose()
  readonly nationality?: string;

  @Expose()
  readonly province?: string;

  @Expose()
  readonly avatar?: UploadedFile;

  @Expose()
  readonly roles?: UserRoles;

  readonly passwordHashed: string;

  @Expose()
  readonly active?: boolean;

  @Expose()
  readonly deleted?: boolean;


  institutionId?: string;


  @Expose()
  institution?: Institution

  constructor(options: UserPropertiesModel) {
    Object.assign(this as UserModel, options);
    if((options as any)?.institution)
    this.institution =Institution.create((options as any).institution);
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
    return plainToClass(User, options, { excludeExtraneousValues: true });
  }
}
