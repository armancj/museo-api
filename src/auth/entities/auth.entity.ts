
import {plainToClass} from 'class-transformer';
import {AuthModel, AuthPropertiesModel} from "../repositories/auth.model";

export class Auth implements AuthModel{

  uuid: string;

  currentHashedRefreshToken: string;

  code: number;

  email?: string;
  expireCodeDate: number;




  constructor(options: AuthPropertiesModel) {
    Object.assign(this as AuthModel, options);
  }

  static create(options: AuthPropertiesModel): Auth {
    return plainToClass(Auth, options, { excludeExtraneousValues: true });
  }
}
