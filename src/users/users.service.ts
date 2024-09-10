import {Injectable, NotFoundException} from '@nestjs/common';
import {UserMongoRepository} from "./repositories/user-mongo.repository";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./entities/user.entity";
import {FindAllDto} from "../common/dto/find-all.dto";
import {UserModel, UserPropertiesModel} from "./models/user.model";
import {hashedPassword} from "../common/utils/hashed-password";
import {OnEvent} from "@nestjs/event-emitter";
import {EventEmitter} from "../shared/event-emitter/event-emitter.const";


@Injectable()
export class UsersService {
    constructor(
        private readonly userMongoRepository: UserMongoRepository,
    ) {
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const {password, ...rest} = createUserDto;
        const passwordHashed = await hashedPassword(password);
        const uuid = crypto.randomUUID();

        return this.userMongoRepository.create({...rest, passwordHashed, uuid});
    }

    async findAll(query: FindAllDto, filter: Partial<UserPropertiesModel>) {
        return await this.userMongoRepository.findAll(filter, {}, query,);
    }

    @OnEvent(EventEmitter.userFound)
    async findOne(filter: Partial<UserModel>): Promise<User> {
        const user = await this.userMongoRepository.findOne(filter, {}, {lean: true});
        if (!user) throw new NotFoundException('User not found')
        return user;
    }

    async update(filter: Partial<UserModel>, updateUserDto: Partial<UserModel>): Promise<boolean> {
        await this.findOne(filter);
        return this.userMongoRepository.updatedOne(filter, updateUserDto);
    }

    async remove(filter: Partial<UserModel>): Promise<boolean> {
        await this.findOne(filter);
        return this.userMongoRepository.deleteOne(filter);
    }

    async softDelete(param: { uuid: string }) {
        const user = await this.findOne({...param, deleted: false});

        return await this.userMongoRepository.updatedOne({
            deleted: true,
            active: false,
            email: `${user.uuid}: ${user.email}`,
            mobile: `${user.uuid}: ${user.mobile}`,
        });
    }
}
