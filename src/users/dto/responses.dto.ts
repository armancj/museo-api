import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserResponseDto {
  @ApiProperty({
    type: String,
    example: 'User successfully deleted'
  })
  message: string;
}

export class NotFoundResponseDto {
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


export class UnauthorizedResponseDto {
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