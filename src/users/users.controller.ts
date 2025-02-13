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
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
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
import { BadRequestResponseDto, ConflictResponseDto, DeleteUserResponseDto, DeleteUserResponseDtoAvatar, ForbiddenResponseDto, InternalServerErrorResponseDto, NotFoundResponseDto, NotFoundResponseDtoAvatar, UnauthorizedResponseDto, UnauthorizedResponseDtoAvatar } from './dto/responses.dto';
@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

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
  @ApiParam({
    name: 'uuid',
    description: 'UUID del usuario a actualizar',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado exitosamente',
    type: Boolean,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos de entrada inválidos',
    type: BadRequestResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
    type: NotFoundResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'No autorizado',
    type: UnauthorizedResponseDto,
  })
  @ApiResponse({
    status: 403,
    description: 'Prohibido',
    type: ForbiddenResponseDto,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflicto con el estado actual del recurso',
    type: ConflictResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Error interno del servidor',
    type: InternalServerErrorResponseDto,
  })
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
  @ApiParam({
    name: 'uuid',
    description: 'UUID del usuario',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos de entrada inválidos',
    type: BadRequestResponseDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Estado actualizado exitosamente',
    type: Boolean,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
    type: NotFoundResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'No autorizado',
    type: UnauthorizedResponseDto,
  })
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
  @ApiParam({
    name: 'uuid',
    description: 'UUID del usuario',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Eliminación exitosa',
    type: Boolean,
  })

  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
    type: NotFoundResponseDto,
  })

  @ApiResponse({
    status: 400,
    description: 'Datos de entrada inválidos',
    type: BadRequestResponseDto,
  })

  @ApiResponse({
    status: 401,
    description: 'No autorizado',
    type: UnauthorizedResponseDto,
  })

  @ApiResponse({
    status: 403,
    description: 'Prohibido',
    type: ForbiddenResponseDto,
  })

  @ApiResponse({
    status: 500,
    description: 'Error interno del servidor',
    type: InternalServerErrorResponseDto,
  })

  async removeSoft(@Param('uuid') uuid: string): Promise<boolean> {
    return this.userService.softDelete({ uuid });
  }

  @Post(':uuid/avatar')
  @UseInterceptors(FileInterceptor('file') as any)
  @ApiConsumes('multipart/form-data')
  async uploadFileAvatarImage(
    @Param('uuid') uuid: string,
    @Body() body: UploadAvatarUserDto,
    @UploadedFile(ImageProcessingPipe) file: FileStorageModel,
  ) {
    await this.userService.uploadFiled(uuid, file);
    return { message: `File successfully uploaded` };
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
  @ApiResponse({
    status: 200,
    description: 'Usuario eliminado exitosamente',
    type: DeleteUserResponseDtoAvatar
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
    type: NotFoundResponseDtoAvatar
  })
  @ApiResponse({
    status: 401,
    description: 'No autorizado',
    type: UnauthorizedResponseDtoAvatar
  })
  removeFile(@Param('uuid') uuid: string) {
    return this.userService.removeFile(uuid);
  }

  @Delete(':uuid')
  @ApiParam({
    name: 'uuid',
    description: 'UUID del usuario a eliminar',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Eliminación exitosa',
    type: Boolean,
  })

  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
    type: NotFoundResponseDto,
  })

  @ApiResponse({
    status: 400,
    description: 'Datos de entrada inválidos',
    type: BadRequestResponseDto,
  })

  @ApiResponse({
    status: 401,
    description: 'No autorizado',
    type: UnauthorizedResponseDto,
  })

  @ApiResponse({
    status: 403,
    description: 'Prohibido',
    type: ForbiddenResponseDto,
  })

  @ApiResponse({
    status: 500,
    description: 'Error interno del servidor',
    type: InternalServerErrorResponseDto,
  })

  async remove(@Param('uuid') uuid: string): Promise<boolean> {
    return await this.userService.remove({ uuid });
  }
}
