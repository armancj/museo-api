import {Injectable, NotFoundException} from '@nestjs/common';
import {UserMongoRepository} from "./repositories/user-mongo.repository";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./entities/user.entity";
import {FindAllDto} from "../common/dto/find-all.dto";
import {UserModel} from "./models/user.model";
import {Paginator} from "../common/lib/paginator.lib";
import {UpdateUserDto} from "./dto/update-user.dto";


@Injectable()
export class UsersService {
  constructor(
    private readonly userMongoRepository: UserMongoRepository,
  ) {}


  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userMongoRepository.create(createUserDto);
  }

  async findAll(query: FindAllDto, filter?: Partial<UserModel>) {
    let paginator: Paginator;
    if (query?.perPage) paginator = new Paginator({ page: +query.page, perPage: +query.perPage });
    const {users, totalElement}=await this.userMongoRepository.findAll(filter, {}, query, { lean: true });
    const totalPage = query?.perPage ? paginator.getTotalPage(totalElement) : 1;
    return {
      users,
      totalPage,
      totalElement,
    }
  }

  async findOne(filter: Partial<UserModel>): Promise<User> {
    const user = await this.userMongoRepository.findOne(filter, {}, { lean: true });

    if(!user) throw new NotFoundException('User not found')

    return user;
  }

  async update(filter: Partial<UserModel>, updateUserDto: UpdateUserDto): Promise<boolean> {
    await this.findOne(filter);
    return this.userMongoRepository.updatedOne(filter, updateUserDto);
  }

  async remove(filter: Partial<UserModel>): Promise<boolean> {
    await this.findOne(filter);
    return this.userMongoRepository.deleteOne(filter);
  }
  }
