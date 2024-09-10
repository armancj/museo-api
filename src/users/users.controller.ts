import {
  Body,
  ClassSerializerInterceptor,
  Controller, Delete, Get, Param, Patch, Post, Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "./entities/user.entity";
import {FindAllDto} from "../common/dto/find-all.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {FilterUserDto} from "./dto/filter-user.dto";
import {ActivatedUserDto} from "./dto/activated-user.dto";



@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Post('/all')
  async findAll(@Query() query: FindAllDto, @Body() filterUserDto: FilterUserDto) {
    const {users, totalPage, totalElement} = await this.userService.findAll(query, { ...filterUserDto,  deleted: false});
    return {usersData: users.value, totalPage, totalElement}
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.findOne({uuid, deleted: false});
  }

  @Patch(':uuid')
  async update(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto): Promise<boolean> {
    return this.userService.update({filter: {uuid, deleted: false}, updateUserDto});
  }

  @Patch(':uuid/change-activate')
  async updateChangeActivate(@Param('uuid') uuid: string, @Body() activatedUserDto: ActivatedUserDto): Promise<boolean> {
    return this.userService.update({filter:{uuid, deleted: false}, updateUserDto:activatedUserDto });
  }

  @Delete(':uuid/soft')
  async removeSoft(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.softDelete({uuid});
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.remove({uuid});
  }

}
