import { ApiBody, ApiConsumes, ApiProduces, ApiProperty } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { UploadAvatarUserDto } from './upload-avatar-user.dto';


export class DeleteUserResponseDto {
  @ApiProperty({
    type: String,
    example: 'Usuario eliminado exitosamente'
  })
  message: string;
}

export class UploadAvatarResponseDto {
  @ApiProperty({
    type: String,
    example: 'Avatar subido exitosamente'
  })
  message: string;
}

export class DeleteAvatarResponseDto {
  @ApiProperty({
    type: String,
    example: 'Avatar eliminado exitosamente'
  })
  message: string;
}

export class BadRequestResponseDto {
  @ApiProperty({ example: 400, description: 'Solicitud incorrecta' })
  statusCode: number;

  @ApiProperty({ example: 'Datos de entrada inválidos' })
  message: string;

  @ApiProperty({
    type: [String],
    example: ['Error de formato de archivo', 'Tamaño de archivo excedido'],
    description: 'Errores detallados'
  })
  errors: string[];
}

export class UnauthorizedResponseDto {
  @ApiProperty({ example: 401, description: 'No autorizado' })
  statusCode: number;

  @ApiProperty({ example: 'Autenticación requerida' })
  message: string;
}

export class ForbiddenResponseDto {
  @ApiProperty({ example: 403, description: 'Acceso prohibido' })
  statusCode: number;

  @ApiProperty({ example: 'No tiene permisos para esta acción' })
  message: string;
}

export class NotFoundResponseDto {
  @ApiProperty({ example: 404, description: 'Recurso no encontrado' })
  statusCode: number;

  @ApiProperty({ example: 'Usuario no encontrado' })
  message: string;
}

export class ConflictResponseDto {
  @ApiProperty({ example: 409, description: 'Conflicto de estado' })
  statusCode: number;

  @ApiProperty({ example: 'El usuario ya está inactivo' })
  message: string;
}

export class InternalServerErrorResponseDto {
  @ApiProperty({ example: 500, description: 'Error interno del servidor' })
  statusCode: number;

  @ApiProperty({ example: 'Error procesando la solicitud' })
  message: string;
}

export function DeleteUserApiDocs() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'Eliminación exitosa', type: Boolean }),
    ApiResponse({ status: 404, description: 'Usuario no encontrado', type: NotFoundResponseDto }),
    ApiResponse({ status: 400, description: 'Datos inválidos', type: BadRequestResponseDto }),
    ApiResponse({ status: 401, description: 'No autorizado', type: UnauthorizedResponseDto }),
    ApiResponse({ status: 403, description: 'Acceso prohibido', type: ForbiddenResponseDto }),
    ApiResponse({ status: 500, description: 'Error del servidor', type: InternalServerErrorResponseDto })
  );
}

export function UpdateUserApiDocs() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'Usuario actualizado', type: Boolean }),
    ApiResponse({ status: 400, type: BadRequestResponseDto }),
    ApiResponse({ status: 404, type: NotFoundResponseDto }),
    ApiResponse({ status: 401, type: UnauthorizedResponseDto }),
    ApiResponse({ status: 403, type: ForbiddenResponseDto }),
    ApiResponse({ status: 409, type: ConflictResponseDto }),
    ApiResponse({ status: 500, type: InternalServerErrorResponseDto })
  );
}

export function ChangeActivateUserApiDocs() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'Estado actualizado', type: Boolean }),
    ApiResponse({ status: 400, type: BadRequestResponseDto }),
    ApiResponse({ status: 404, type: NotFoundResponseDto }),
    ApiResponse({ status: 401, type: UnauthorizedResponseDto })
  );
}

export function SoftDeleteUserApiDocs() {
  return applyDecorators(

    ApiResponse({ status: 200, description: 'Eliminación temporal exitosa', type: Boolean }),
    ApiResponse({ status: 404, type: NotFoundResponseDto }),
    ApiResponse({ status: 400, type: BadRequestResponseDto }),
    ApiResponse({ status: 401, type: UnauthorizedResponseDto }),
    ApiResponse({ status: 403, type: ForbiddenResponseDto }),
    ApiResponse({ status: 500, type: InternalServerErrorResponseDto })
  );
}

// Decoradores para endpoints de avatar
export function UploadAvatarApiDocs() {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({
      description: 'Archivo de imagen para el avatar',
      type: UploadAvatarUserDto,
    }),
    ApiResponse({
      status: 201,
      description: 'Avatar subido exitosamente',
      type: UploadAvatarResponseDto,
    }),
    ApiResponse({ status: 400, type: BadRequestResponseDto }),
    ApiResponse({ status: 404, type: NotFoundResponseDto }),
    ApiResponse({ status: 401, type: UnauthorizedResponseDto }),
    ApiResponse({ status: 500, type: InternalServerErrorResponseDto })
  );
}

export function GetAvatarApiDocs() {
  return applyDecorators(
    ApiProduces('image/*'),
    ApiResponse({
      status: 200,
      description: 'Avatar obtenido exitosamente',
      content: {
        'image/*': { schema: { type: 'string', format: 'binary' } },
      },
    }),
    ApiResponse({ status: 404, type: NotFoundResponseDto }),
    ApiResponse({ status: 401, type: UnauthorizedResponseDto }),
    ApiResponse({ status: 500, type: InternalServerErrorResponseDto })
  );
}

export function DeleteAvatarApiDocs() {
  return applyDecorators(
    ApiResponse({ status: 200, description: 'Avatar eliminado', type: DeleteAvatarResponseDto }),
    ApiResponse({ status: 401, type: UnauthorizedResponseDto }),
    ApiResponse({ status: 404, type: NotFoundResponseDto }),
    ApiResponse({ status: 500, type: InternalServerErrorResponseDto })
  );
}