
import { UserModel, UserPropertiesModel } from '../models/user.model';
import {User} from "./user.entity";


export class Users {
  private constructor(public value: UserModel[]) {  }

  public static create(value: UserPropertiesModel[]): Users {
    if (!Array.isArray(value)) throw new TypeError('Users is not an array');
    return new Users(
        value.filter((data) => data).map((data) => User.create(data)),
    );
  }

  addUser(user: User): void {
    this.value.push(user);
  }

  getAllUsers(): Users {
    return new Users(this.value);
  }

  findUserByEmail(email: string): User {
    const user = this.value.find(user => user.email === email);
    return User.create(user);
  }

  deleteUserByEmail(email: string): void {
    this.value = this.value.filter(user => user.email !== email);
  }


}
