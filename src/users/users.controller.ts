import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param, ParseFilePipeBuilder,
  Patch,
  Post,
  Query, UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {ApiBody, ApiConsumes, ApiTags} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { FindAllDto } from '../common/dto/find-all.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { ActivatedUserDto } from './dto/activated-user.dto';
import { UserModel } from './models/user.model';
import {FileInterceptor} from "@nestjs/platform-express";
import {UploadAvatarUserDto} from "./dto/upload-avatar-user.dto";
import {ImageProcessingPipe} from "../file-storage/pipe/image-processing.pipe";
import {FileStorageModel} from "../file-storage/model/file-storage.model";
@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Post('/all')
  async findAll(
    @Query() query: FindAllDto,
    @Body() filterUserDto: FilterUserDto,
  ) {
    const { users, totalPage, totalElement } = await this.userService.findAll(
      query,
      { ...filterUserDto, deleted: false } as UserModel,
    );
    return { usersData: users.value, totalPage, totalElement };
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<User> {
    return this.userService.findOne({ uuid, deleted: false });
  }

  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<boolean> {
    return this.userService.update({
      filter: { uuid, deleted: false },
      updateUserDto,
    });
  }

  @Patch(':uuid/change-activate')
  async updateChangeActivate(
    @Param('uuid') uuid: string,
    @Body() activatedUserDto: ActivatedUserDto,
  ): Promise<boolean> {
    return this.userService.update({
      filter: { uuid, deleted: false },
      updateUserDto: activatedUserDto,
    });
  }

  @Delete(':uuid/soft')
  async removeSoft(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.softDelete({ uuid });
  }

  @Post(':uuid/upload-avatar')
  @UseInterceptors(FileInterceptor('file') as any)
  @ApiConsumes('multipart/form-data')
  async uploadFileAvatarImage(
      @Param('uuid') uuid: string,
      @Body() body: UploadAvatarUserDto,
      @UploadedFile(ImageProcessingPipe) file: FileStorageModel,
  ) {
    await this.userService.uploadFiled(uuid, file)
    return { message: `File successfully uploaded` }
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.remove({ uuid });
  }
}
