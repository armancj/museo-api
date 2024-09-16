import { AuthModel } from './auth.model';

export type UpdateOptions = {
  currentHashedRefreshToken?: string;
};

/**
 * user repository database
 */
export interface AuthRepositoryModel {
  /**
   * Find one user
   * @returns {Maybe<AuthModel>}
   * @param {Partial<AuthModel>} filter
   */
  findOneAuth(filter: Partial<AuthModel>): Promise<AuthModel>;

  /**
   * Update one user
   * @param {Partial<UserModel>} filter
   * @param {Partial<UpdateOptions>} options
   * @returns {Maybe<UserModel>} If is true, the user is updated, if is false, cannot be updated (no exists in the database)
   */
  updateOneAuth(
    filter: Partial<AuthModel>,
    options: Partial<UpdateOptions>,
  ): Promise<AuthModel>;

  createAuth(authModel: AuthModel): Promise<AuthModel>;
}
