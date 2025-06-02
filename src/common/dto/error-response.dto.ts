import { HttpStatus } from '@nestjs/common';

/**
 * Base DTO for standardized error responses across the application.
 */
export class ErrorResponseDto {
  /**
   * HTTP status code of the error.
   */
  statusCode: number;

  /**
   * Error message or messages.
   */
  message: string | string[];

  /**
   * Optional error type/code for more specific error identification.
   */
  error?: string;

  /**
   * Timestamp when the error occurred.
   */
  timestamp: string;

  /**
   * Request path that caused the error.
   */
  path: string;

  /**
   * HTTP method of the request.
   */
  method: string;

  /**
   * Creates a new ErrorResponseDto instance.
   * 
   * @param statusCode HTTP status code
   * @param message Error message or messages
   * @param path Request path
   * @param method HTTP method
   * @param error Optional error type/code
   */
  constructor(
    statusCode: number,
    message: string | string[],
    path: string,
    method: string,
    error?: string,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.timestamp = new Date().toISOString();
    this.path = path;
    this.method = method;
  }

  /**
   * Creates a BadRequest (400) error response.
   */
  static badRequest(message: string | string[], path: string, method: string): ErrorResponseDto {
    return new ErrorResponseDto(
      HttpStatus.BAD_REQUEST,
      message,
      path,
      method,
      'Bad Request',
    );
  }

  /**
   * Creates an Unauthorized (401) error response.
   */
  static unauthorized(message: string | string[], path: string, method: string): ErrorResponseDto {
    return new ErrorResponseDto(
      HttpStatus.UNAUTHORIZED,
      message,
      path,
      method,
      'Unauthorized',
    );
  }

  /**
   * Creates a Forbidden (403) error response.
   */
  static forbidden(message: string | string[], path: string, method: string): ErrorResponseDto {
    return new ErrorResponseDto(
      HttpStatus.FORBIDDEN,
      message,
      path,
      method,
      'Forbidden',
    );
  }

  /**
   * Creates a NotFound (404) error response.
   */
  static notFound(message: string | string[], path: string, method: string): ErrorResponseDto {
    return new ErrorResponseDto(
      HttpStatus.NOT_FOUND,
      message,
      path,
      method,
      'Not Found',
    );
  }

  /**
   * Creates an InternalServerError (500) error response.
   */
  static internalServerError(message: string | string[], path: string, method: string): ErrorResponseDto {
    return new ErrorResponseDto(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      path,
      method,
      'Internal Server Error',
    );
  }
}