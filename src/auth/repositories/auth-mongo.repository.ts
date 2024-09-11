import {InjectModel} from '@nestjs/mongoose';
import {AuthMongoModel, AuthNameEntity} from "../schema/auth.schema";
import {Injectable} from "@nestjs/common";
import {AuthRepositoryModel} from "./auth.repository.model";
import {AuthModel} from "./auth.model";
import {Auth} from "../entities/auth.entity";
import {RootFilterQuery} from "mongoose";

@Injectable()
export class AuthMongoRepository implements AuthRepositoryModel {
    constructor(
        @InjectModel(AuthNameEntity)
        private readonly authMongoModel: AuthMongoModel,
    ) {
    }

    async createAuth(authModel: AuthModel): Promise<AuthModel> {
        const userAuth = await this.authMongoModel.create(authModel);
        return Auth.create(userAuth);
    }

    async findOneAuth(filter: Partial<AuthModel>): Promise<Auth> {
        const filterData: RootFilterQuery<AuthModel> = {...filter};
        const userAuth = await this.authMongoModel.findOne(filterData ).exec()

        if (!userAuth) return null;
        return Auth.create(userAuth);
    }

    async updateOneAuth(
        filter: Partial<AuthModel>,
        updateOptions: Partial<AuthModel>,
    ): Promise<AuthModel> {
        const filterData: RootFilterQuery<AuthModel> = {...filter};
        const userAuth = await this.authMongoModel
            .findOneAndUpdate(filterData, updateOptions, {upsert: true})
            .exec();
        if (!userAuth) return null;
        return Auth.create(userAuth);
    }
}
