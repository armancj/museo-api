import {Injectable, NotFoundException} from '@nestjs/common';
import {UserMongoRepository} from "./repositories/user-mongo.repository";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./entities/user.entity";
import {FindAllDto} from "../common/dto/find-all.dto";
import {UserModel} from "./models/user.model";
import {hashedPassword} from "../common/utils/hashed-password";
import {OnEvent} from "@nestjs/event-emitter";
import {EventEmitter} from "../shared/event-emitter/event-emitter.const";

export type UpdatedUser = {
    filter: Partial<UserModel>, updateUserDto: Partial<UserModel> & {password?: string;}
}
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

    async findAll(query: FindAllDto, filter: Partial<UserModel>) {
        return await this.userMongoRepository.findAll(filter, {}, query,);
    }

    async findOne(filter: Partial<UserModel>): Promise<User> {
        const user = await this.userMongoRepository.findOne(filter, {}, {lean: true});
        if (!user) throw new NotFoundException('User not found')
        return User.create(user);
    }

    @OnEvent(EventEmitter.userUpdated)
    async update({filter, updateUserDto }: UpdatedUser): Promise<boolean> {
        await this.findOne(filter);
        const {password, ...rest} = updateUserDto;
        const updateUser: Partial<UserModel> = {...rest} as UserModel;
        if(password)
            updateUser.passwordHashed = await hashedPassword(password);
        return this.userMongoRepository.updatedOne(filter, updateUser);
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
