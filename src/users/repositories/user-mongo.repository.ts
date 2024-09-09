import {UsersModel} from '../models/users.model';
import {InjectModel} from '@nestjs/mongoose';
import {
    UserDocument,
    UserMongoModel,
    UserNameEntity,
} from '../schema/users.schema';
import {FindAllDto} from "../../common/dto/find-all.dto";
import {Injectable} from "@nestjs/common";
import {User} from "../entities/user.entity";
import {ProjectionType, QueryOptions, RootFilterQuery, UpdateQuery, UpdateWithAggregationPipeline} from "mongoose";
import {Users} from "../entities/users.entity";


@Injectable()
export class UserMongoRepository {

    constructor(
        @InjectModel(UserNameEntity)
        private readonly userMongoModel: UserMongoModel,
    ) {
    }


    async create(createUserDto: UserDocument): Promise<User> {
        const createdUser = await this.userMongoModel.create(createUserDto);
        return User.create(createdUser);
    }

    async findAll(
        filter: RootFilterQuery<UserDocument> = {},
        projection: ProjectionType<UserDocument> = {},
        {page = 1, perPage = 10}: FindAllDto,
        options: QueryOptions<UserDocument> & { lean: true },
    ): Promise<{ users: UsersModel; totalElement: number }> {
        const usersMongo = await this.userMongoModel
            .find(filter, projection, options)
            .skip(Number(page))
            .limit(Number(perPage))
            .exec();

        const totalElement = (await this.userMongoModel
            .find(filter, projection, options).exec())?.length || 0;
        return {users: Users.create(usersMongo), totalElement};
    }

    async findOne(filter: RootFilterQuery<UserDocument> = {},
                  projection: ProjectionType<UserDocument> = {},
                  options: QueryOptions<UserDocument> & { lean: true },): Promise<User> {
        const user = await this.userMongoModel
            .findOne(filter, projection, options)
            .exec();
        if (!user) return null;
        return User.create(user);
    }


    async updatedOne(filter?: RootFilterQuery<UserDocument>,
                     update?: UpdateQuery<UserDocument> | UpdateWithAggregationPipeline): Promise<boolean> {
        const user = await this.userMongoModel.updateOne(filter, update).exec()
        return user.modifiedCount > 0;
    }

    async deleteOne(filter?: RootFilterQuery<UserDocument>): Promise<boolean> {
        const user = await this.userMongoModel.deleteOne(filter).exec()
        return user.deletedCount > 0;
    }

}
