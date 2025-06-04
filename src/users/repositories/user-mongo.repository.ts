import { InjectModel } from '@nestjs/mongoose';
import { UserMongoModel, UserNameEntity } from '../schema/users.schema';
import { FindAllDto } from '../../common/dto/find-all.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import {
  FilterQuery,
  ProjectionType,
  QueryOptions,
  RootFilterQuery,
  UpdateQuery,
} from 'mongoose';
import { Users } from '../entities/users.entity';
import { UserModel, UserPropertiesModel } from '../models/user.model';
import { Paginator } from '../../common/lib/paginator.lib';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEmitter } from '../../shared/event-emitter/event-emitter.const';
import {
  InstitutionMongoModel,
  InstitutionNameEntity,
} from '../../address/institutions/schema/institution.schema';
import { InstitutionModel } from '../../address/institutions/entities/institution.model';
import { UserRoles } from '../enum/user-roles.enum';

export type createUserModel = Omit<
  UserModel,
  'active' | 'deleted' | 'institution'
>;

@Injectable()
export class UserMongoRepository {
  private POPULATE: any = { path: 'institution', match: { deleted: false } };

  constructor(
    @InjectModel(UserNameEntity)
    private readonly userMongoModel: UserMongoModel,

    @InjectModel(InstitutionNameEntity)
    private institutionDocumentModel: InstitutionMongoModel,
  ) {}

  async create(createUserDto: createUserModel): Promise<User> {
    const institution = await this.checkInstitution(createUserDto);
    const createdUser = await this.userMongoModel.create(createUserDto);
    return User.create({
      ...createdUser.toObject(),
      institution,
    } as UserPropertiesModel);
  }

  async findAll(
    filter: Partial<UserModel> = {},
    projection: ProjectionType<UserModel> = {},
    { page = 1, perPage = 10 }: FindAllDto,
  ): Promise<{ users: Users; totalElement: number; totalPage: number }> {
    const filterMongo: FilterQuery<UserModel> = { ...filter };

    const shouldPaginate = perPage && perPage > 0;
    const skip = shouldPaginate ? (page - 1) * perPage : undefined;
    const limit = shouldPaginate ? perPage : undefined;

    const query = this.userMongoModel
      .find(filterMongo, projection)
      .populate(this.POPULATE)
      .lean();

    if (shouldPaginate) {
      query.skip(skip!).limit(limit!);
    }

    const usersMongo = await query.exec();

    const totalElement = await this.userMongoModel
      .countDocuments(filterMongo)
      .exec();

    const totalPage = shouldPaginate ? Math.ceil(totalElement / perPage) : 1;

    return { users: Users.create(usersMongo), totalElement, totalPage };
  }

  @OnEvent(EventEmitter.userFound)
  async findOne(
    filter: Partial<UserModel> = {},
    projection: ProjectionType<UserModel> = {},
    options: QueryOptions<UserModel> & { lean: true },
  ): Promise<UserModel | null> {
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };

    const user = await this.userMongoModel
      .findOne(filterMongo, projection, options)
      .exec();
    if (!user) return null;

    return user;
  }

  async updatedOne(
    filter: Partial<UserModel> = {},
    update: UpdateQuery<UserModel> = {},
  ): Promise<boolean> {
    const filterMongo: RootFilterQuery<UserModel> = { ...filter };
    await this.checkInstitution(update);

    const user = await this.userMongoModel
      .updateOne(filterMongo, { ...update, updatedAt: new Date(Date.now()) })
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

  private async checkInstitution(createUserDto: UpdateQuery<UserModel>) {
    if (
      !createUserDto?.institutionId ||
      [UserRoles.administrator, UserRoles.superAdmin].includes(
        createUserDto?.roles,
      )
    )
      return;

    const institution: InstitutionModel = (await this.institutionDocumentModel
      .findOne({
        uuid: createUserDto.institutionId,
        deleted: false,
      })
      .lean()
      .exec()) as InstitutionModel;

    if (!institution) {
      throw new UnauthorizedException(
        'Institution not found or has been deleted',
      );
    }

    if (
      institution.province !== createUserDto?.province ||
      institution.country !== createUserDto?.nationality ||
      institution.municipality !== createUserDto?.municipal
    )
      throw new UnauthorizedException(
        'Mismatch between user and institution data',
      );

    return institution;
  }
}
