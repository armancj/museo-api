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

/**
 * Controller responsible for handling user-related HTTP requests.
 *
 * This controller provides endpoints for managing users including:
 * - Creating new users
 * - Retrieving users (individual or paginated lists)
 * - Updating user information
 * - Managing user activation status
 * - Handling user avatars (upload, retrieve, delete)
 * - Soft-deleting users
 *
 * Access to most endpoints is restricted based on user roles.
 */
@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  /**
   * Creates an instance of UsersController.
   *
   * @param userService - Service that handles user-related business logic
   */
  constructor(private readonly userService: UsersService) {}

  /**
   * Creates a new user in the system.
   *
   * @param createUserDto - Data transfer object containing the new user's information
   * @param user - The currently authenticated user creating the new user
   * @returns Promise resolving to the newly created user entity
   */
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

  /**
   * Retrieves a paginated list of users based on filter criteria.
   *
   * @param query - Pagination parameters (page, size, etc.)
   * @param filterUserDto - Filter criteria for users
   * @param user - The currently authenticated user making the request
   * @returns Object containing user data, total pages, and total elements
   */
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

  /**
   * Retrieves a single user by UUID.
   *
   * @param uuid - The unique identifier of the user to retrieve
   * @param user - The currently authenticated user making the request
   * @returns Promise resolving to the requested user entity
   * @throws NotFoundException if the user is not found
   */
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

  /**
   * Updates a user's information.
   *
   * @param uuid - The unique identifier of the user to update
   * @param updateUserDto - Data transfer object containing the updated user information
   * @param user - The currently authenticated user making the request
   * @returns Promise resolving to a boolean indicating success
   * @throws NotFoundException if the user is not found
   */
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

  /**
   * Updates a user's activation status.
   *
   * @param uuid - The unique identifier of the user to update
   * @param activatedUserDto - Data transfer object containing the activation status
   * @returns Promise resolving to a boolean indicating success
   * @throws NotFoundException if the user is not found
   */
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

  /**
   * Uploads an avatar image for a user.
   *
   * @param uuid - The unique identifier of the user
   * @param body - Data transfer object containing metadata for the avatar
   * @param file - The uploaded file processed through the ImageProcessingPipe
   * @returns Promise resolving to the result of the file upload operation
   * @throws NotFoundException if the user is not found
   */
  @Post(':uuid/avatar')
  @UseInterceptors(FileInterceptor('file') as any)
  @ApiConsumes('multipart/form-data')
  async uploadFileAvatarImage(
    @Param('uuid') uuid: string,
    @Body() body: UploadAvatarUserDto,
    @UploadedFile(ImageProcessingPipe) file: FileStorageModel,
  ) {
    return await this.userService.uploadFile(uuid, file);
  }

  /**
   * Retrieves a user's avatar image as a streamable file.
   *
   * @param uuid - The unique identifier of the user
   * @returns Promise resolving to a StreamableFile containing the avatar image
   * @throws NotFoundException if the user or avatar is not found
   */
  @Get(':uuid/avatar')
  async getFile(@Param('uuid') uuid: string): Promise<StreamableFile> {
    const { file, metadata } = await this.userService.streamFile(uuid);
    return new StreamableFile(file, {
      type: metadata.mimeType,
      disposition: `attachment; filename=${metadata.originalName}`,
      length: file.length,
    });
  }

  /**
   * Removes a user's avatar image.
   *
   * @param uuid - The unique identifier of the user
   * @returns Promise resolving to the result of the file removal operation
   * @throws NotFoundException if the user or avatar is not found
   */
  @Delete(':uuid/avatar')
  removeFile(@Param('uuid') uuid: string) {
    return this.userService.removeFile(uuid);
  }

  /**
   * Soft deletes a user by UUID.
   *
   * @param uuid - The unique identifier of the user to delete
   * @returns Promise resolving to a boolean indicating success
   * @throws NotFoundException if the user is not found
   */
  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.softDelete({ uuid });
  }
}
