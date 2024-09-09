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
    return this.userService.findAll(query, filterUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne({_id: id});
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<boolean> {
    return this.userService.update({_id: id}, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.userService.remove({_id: id});
  }

}
