
import {plainToClass} from 'class-transformer';
import {AuthModel, AuthPropertiesModel} from "../repositories/auth.model";

export class Auth implements AuthModel{

  readonly uuid: string;
  readonly currentHashedRefreshToken: string;

  readonly code: number;

  readonly email: string;



  constructor(options: AuthPropertiesModel) {
    Object.assign(this as AuthModel, options);
  }

  static create(options: AuthPropertiesModel): Auth {
    return plainToClass(Auth, options, { excludeExtraneousValues: true });
  }
}
