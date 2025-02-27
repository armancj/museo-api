import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { FindAllDto } from '../common/dto/find-all.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { ActivatedUserDto } from './dto/activated-user.dto';
import { UserModel } from './models/user.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadAvatarUserDto } from './dto/upload-avatar-user.dto';
import { ImageProcessingPipe } from '../file-storage/pipe/image-processing.pipe';
import { FileStorageModel } from '../file-storage/model/file-storage.model';
import { Auth, CurrentUser } from '../auth/decorator';
import { UserRoles } from './enum/user-roles.enum';
import { NotFound } from '../common/dto/exception.dto';

@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin, UserRoles.manager],
  })
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @CurrentUser() user: User,
  ): Promise<User> {
    return this.userService.create(createUserDto, user);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin, UserRoles.manager],
  })
  @Post('/all')
  async findAll(
    @Query() query: FindAllDto,
    @Body() filterUserDto: FilterUserDto,
    @CurrentUser() user: User,
  ) {
    const { users, totalPage, totalElement } = await this.userService.findAll(
      query,
      { ...filterUserDto, deleted: false } as UserModel,
      user,
    );
    return { usersData: users.value, totalPage, totalElement };
  }

  @ApiNotFoundResponse({ description: 'User not found', type: NotFound })
  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin, UserRoles.manager],
  })
  @Get(':uuid')
  async findOne(
    @Param('uuid') uuid: string,
    @CurrentUser() user: User,
  ): Promise<User> {
    return this.userService.findOne({ uuid, deleted: false }, user);
  }

  @Auth({
    roles: [UserRoles.administrator, UserRoles.superAdmin, UserRoles.manager],
  })
  @Patch(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user: User,
  ): Promise<boolean> {
    return this.userService.update({
      filter: { uuid, deleted: false },
      updateUserDto,
      user,
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

  @Post(':uuid/avatar')
  @UseInterceptors(FileInterceptor('file') as any)
  @ApiConsumes('multipart/form-data')
  async uploadFileAvatarImage(
    @Param('uuid') uuid: string,
    @Body() body: UploadAvatarUserDto,
    @UploadedFile(ImageProcessingPipe) file: FileStorageModel,
  ) {
    return await this.userService.uploadFiled(uuid, file);
  }

  @Get(':uuid/avatar')
  async getFile(@Param('uuid') uuid: string): Promise<StreamableFile> {
    const { file, metadata } = await this.userService.streamFile(uuid);
    return new StreamableFile(file, {
      type: metadata.mimeType,
      disposition: `attachment; filename=${metadata.originalName}`,
      length: file.length,
    });
  }

  @Delete(':uuid/avatar')
  removeFile(@Param('uuid') uuid: string) {
    return this.userService.removeFile(uuid);
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.softDelete({ uuid });
  }
}
