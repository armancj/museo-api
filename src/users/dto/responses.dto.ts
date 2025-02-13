import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserResponseDto {
  @ApiProperty({
    type: String,
    example: 'User successfully deleted'
  })
  message: string;
}


export class NotFoundResponseDto {
  @ApiProperty({ example: 404, description: 'NotFound' })
  statusCode: number;

  @ApiProperty({ example: 'Recurso no encontrado' })
  message: string;
}

export class BadRequestResponseDto {
  @ApiProperty({ example: 400, description: 'BadRequest' })
  statusCode: number;

  @ApiProperty({ example: 'Datos de entrada inválidos'})
  message: string;

  @ApiProperty({
    example: ['El campo "email" debe ser un correo válido'],
    
    type: [String],
  })
  errors: string[];
}

export class UnauthorizedResponseDto {
  @ApiProperty({ example: 401, description: 'Unauthorized' })
  statusCode: number;

  @ApiProperty({ example: 'No autorizado' })
  message: string;
}

export class ForbiddenResponseDto {
  @ApiProperty({ example: 403, description: 'Forbidden' })
  statusCode: number;

  @ApiProperty({ example: 'Prohibido' })
  message: string;
}

export class ConflictResponseDto {
  @ApiProperty({ example: 409, description: 'Conflict' })
  statusCode: number;

  @ApiProperty({ example: 'Conflicto con el estado actual del recurso' })
  message: string;
}

export class InternalServerErrorResponseDto {
  @ApiProperty({ example: 500, description: 'InternalServerError' })
  statusCode: number;

  @ApiProperty({ example: 'Error interno del servidor' })
  message: string;
}

export class DeleteUserResponseDtoAvatar {
    @ApiProperty({
      type: String,
      example: 'User successfully deleted'
    })
    message: string;
  }
  
  export class NotFoundResponseDtoAvatar {
    @ApiProperty({
      type: Number,
      example: 404,
    })
    statusCode: number;
  
    @ApiProperty({
      type: String,
      example: 'User not found',
    })
    message: string;
  
    @ApiProperty({
      type: String,
      example: 'Not Found',
    })
    error: string;
  
    @ApiProperty({
      type: String,
      example: '2025-02-12T01:07:51.956Z',
    })
    timestamp: string;
  
    @ApiProperty({
      type: String,
      example: '/users/a6470913-e513-4e17-ba2c-70c922b9161e',
    })
    path: string;
  
    @ApiProperty({
      type: String,
      example: 'DELETE',
    })
    method: string;
  }
  
  
  export class UnauthorizedResponseDtoAvatar {
    @ApiProperty({
      type: Number,
      example: 401,
    })
    statusCode: number;
  
    @ApiProperty({
      type: String,
      example: 'Unauthorized',
    })
    message: string;
  
    @ApiProperty({
      type: String,
      example: 'Unauthorized',
    })
    error: string;
  
    @ApiProperty({
      type: String,
      example: '2025-02-12T01:07:51.956Z',
    })
    timestamp: string;
  
    @ApiProperty({
      type: String,
      example: '/users/a6470913-e513-4e17-ba2c-70c922b9161e',
    })
    path: string;
  
    @ApiProperty({
      type: String,
      example: 'DELETE',
    })
    method: string;
  }

