import {
  UserModel,
} from '../models/user.model';
import { UsersModel } from '../models/users.model';
import { UserModelOptions,
} from "../models/users.repository.model";
import { InjectModel } from '@nestjs/mongoose';
import {
  UserMongoModel,
  UserNameEntity,
} from '../schema/users.schema';

import { Maybe } from "../../common/lib/maybe.lib";
import { FindAllDto } from "../../common/dto/find-all.dto";



export class UserMongoRepository {

  constructor(
    @InjectModel(UserNameEntity)
    private readonly userMongoModel: UserMongoModel,
  ) {}


  async create(createUserDto: UserModelOptions): Promise<Maybe<UserModel>> {
    const createdUser = await this.userMongoModel.create(createUserDto);

    return createdUser as any;
  }

  async findAll(
    filter: UserModelOptions = {},
    { page = '1', perPage }: FindAllDto,
  ): Promise<{ users: UsersModel; totalPage: number; totalElement: number }> {

      const users = await this.userMongoModel
        .find(filter)
        .exec();

    const totalPage = await this.userMongoModel.find().countDocuments();

    return { users, totalPage } as any;
  }

  async findOne(filter: Partial<UserModelOptions> = {}): Promise<Maybe<UserModel>> {
    const user = await this.userMongoModel
      .findOne({ ...filter }, {}, { lean: true, projection: undefined })
      .exec();
    if (!user) return Maybe.none();
    return user as any;
  }

}
