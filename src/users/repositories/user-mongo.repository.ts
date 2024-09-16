import { InjectModel } from '@nestjs/mongoose';
import { UserMongoModel, UserNameEntity } from '../schema/users.schema';
import { FindAllDto } from '../../common/dto/find-all.dto';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import {
  ProjectionType,
  QueryOptions,
  RootFilterQuery,
  UpdateQuery,
  UpdateWithAggregationPipeline,
} from 'mongoose';
import { Users } from '../entities/users.entity';
import { UserModel } from '../models/user.model';
import { Paginator } from '../../common/lib/paginator.lib';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from '../../shared/event-emitter/event-emitter.const';

export type createUserModel = Omit<UserModel, 'active' | 'deleted'>;

@Injectable()
export class UserMongoRepository {
  constructor(
    @InjectModel(UserNameEntity)
    private readonly userMongoModel: UserMongoModel,
  ) {}

  async create(createUserDto: createUserModel): Promise<User> {
    const createdUser = await this.userMongoModel.create(createUserDto);
    return User.create(createdUser);
  }

  async findAll(
    filter: Partial<UserModel> = {},
    projection: ProjectionType<UserModel> = {},
    { page = 1, perPage = 10 }: FindAllDto,
  ): Promise<{ users: Users; totalElement: number; totalPage: number }> {
    let paginator: Paginator;
    if (perPage) paginator = new Paginator({ page: +page, perPage: +perPage });
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };
    const usersMongo = await this.userMongoModel
      .find(filterMongo, projection)
      .skip(paginator.skip)
      .limit(paginator.limit)
      .exec();

    const totalElement = await this.userMongoModel
      .countDocuments(filterMongo)
      .exec();

    const totalPage = paginator.getTotalPage(totalElement);

    return { users: Users.create(usersMongo), totalElement, totalPage };
  }

  @OnEvent(EventEmitter.userFound)
  async findOne(
    filter: Partial<UserModel> = {},
    projection: ProjectionType<UserModel> = {},
    options: QueryOptions<UserModel> & { lean: true },
  ): Promise<UserModel> {
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };

    const user = await this.userMongoModel
      .findOne(filterMongo, projection, options)
      .exec();
    if (!user) return null;

    return user;
  }

  async updatedOne(
    filter: Partial<UserModel> = {},
    update?: UpdateQuery<UserModel> | UpdateWithAggregationPipeline,
  ): Promise<boolean> {
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };
    const user = await this.userMongoModel
      .updateOne(filterMongo, update)
      .exec();
    return user.modifiedCount > 0;
  }

  async deleteOne(filter: Partial<UserModel> = {}): Promise<boolean> {
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };
    const user = await this.userMongoModel.deleteOne(filterMongo).exec();
    return user.deletedCount > 0;
  }

  async deleteMany(filter: Partial<UserModel> = {}): Promise<boolean> {
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };
    const user = await this.userMongoModel.deleteMany(filterMongo).exec();
    return user.deletedCount > 0;
  }
}
