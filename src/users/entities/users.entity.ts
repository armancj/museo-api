import { UserModel } from '../models/user.model';
import { UsersModel } from '../models/users.model';

export class Users implements UsersModel {
  constructor(public readonly value: UserModel[]) {}
}
