import { HttpStatus } from "@nestjs/common";
import { ErrorResponseDto } from "./error-response.dto";

/**
 * @deprecated Use ErrorResponseDto.unauthorized() instead
 */
export class Unauthorized extends ErrorResponseDto {
  constructor(path: string = '/auth/profile', method: string = 'GET') {
    super(
      HttpStatus.UNAUTHORIZED,
      'Unauthorized',
      path,
      method,
      'Unauthorized'
    );
  }
}

/**
 * @deprecated Use ErrorResponseDto.forbidden() instead
 */
export class Forbidden extends ErrorResponseDto {
  constructor(path: string = '/auth/profile', method: string = 'GET') {
    super(
      HttpStatus.FORBIDDEN,
      'Forbidden resource',
      path,
      method,
      'Forbidden'
    );
  }
}

/**
 * @deprecated Use ErrorResponseDto.notFound() instead
 */
export class NotFound extends ErrorResponseDto {
  constructor(path: string = '', method: string = 'GET') {
    super(
      HttpStatus.NOT_FOUND,
      'Not found resource',
      path,
      method,
      'Not Found'
    );
  }
}
