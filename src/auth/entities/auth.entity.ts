
import {Expose, plainToClass} from 'class-transformer';
import {AuthModel, AuthPropertiesModel} from "../repositories/auth.model";

export class Auth implements AuthModel{

  @Expose()
  uuid: string;

  @Expose()
  currentHashedRefreshToken: string;

  @Expose()
  code: number;

  @Expose()
  email?: string;

  @Expose()
  expireCodeDate: number;




  constructor(options: AuthPropertiesModel) {
    Object.assign(this as AuthModel, options);
  }

  static create(options: AuthPropertiesModel): Auth {
    return plainToClass(Auth, options, { excludeExtraneousValues: true });
  }
}
