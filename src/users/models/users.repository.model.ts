import { UserModel } from "./user.model";
import { Maybe } from "../../common/lib/maybe.lib";
import { FindAllDto } from "../../common/dto/find-all.dto";
import { UsersModel } from "./users.model";
import { DeepPartial } from "../../common/interfaces/deep-partial";


export type UserModelOptions = Partial<UserModel> & {
};


/**
 * user repository database
 */
export interface UsersRepositoryModel {
  /**
   * Create a user in the database
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<UserModel>} If is true, the user is created, if is false, cannot be created (exists in the database)
   */
  create(createUserDto: UserModel): Promise<UserModel>;

  /**
   * Find all users in the database
   * @returns {UsersModel} Return a users module
   */
  findAll(
    filter: UserModelOptions,
    findAllDto: FindAllDto,
  ): Promise<{ users: UsersModel; totalPage: number; totalElement: number }>;



  /**
   * Find one user
   * @returns {UserModel}
   * @param {UserModelOptions} filter
   */
  findOne(filter: DeepPartial<UserModel>): Promise<Maybe<UserModel>>;

  /**
   * Update one user
   * @param {Partial<UserModel>} filter
   * @param {UpdateUserDto} updateUserDto
   * @returns {Maybe<UserModel>} If is true, the user is updated, if is false, cannot be updated (no exists in the database)
   */
  updateOne(
    filter: Partial<UserModel>,
    updateUserDto: DeepPartial<UserModel>,
  ): Promise<Maybe<UserModel>>;

  /**
   * Remove one user
   * @returns {Maybe<UserModel>} If is true, the user is removed, if is false, cannot be removed (exists in the database)
   * @param {DeepPartial<UserModel>} filter
   */
  deleteOneWithoutRemoveDb(filter: DeepPartial<UserModel>): Promise<boolean>;

  /**
   * Remove one user
   * @returns {Maybe<UserModel>} If is true, the user is removed, if is false, cannot be removed (no exists in the database)
   * @param {DeepPartial<UserModel>} filter
   */
  removeOne(filter: DeepPartial<UserModel>): Promise<boolean>;
}
