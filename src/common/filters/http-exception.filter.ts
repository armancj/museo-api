import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  Inject,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorResponseDto } from '../dto/error-response.dto';
import { ErrorLoggerService } from '../../logger/error-logger.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  constructor(
    @Inject(ErrorLoggerService) private readonly errorLogger: ErrorLoggerService
  ) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // Extract message and error from exception response
    let message: string | string[];
    let errorType: string | undefined;

    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (typeof exceptionResponse === 'object') {
      const exceptionObj = exceptionResponse as Record<string, any>;
      message = exceptionObj.message || exception.message;
      errorType = exceptionObj.error;

      // Ensure message is always an array for consistency
      if (typeof message === 'string') {
        message = [message];
      }
    } else {
      message = exception.message;
    }

    // Create standardized error response
    const errorResponse = new ErrorResponseDto(
      statusCode,
      message,
      request.url,
      request.method,
      errorType
    );

    // Log the error with enhanced context
    this.errorLogger.logError(exception, request, {
      statusCode,
      errorType,
      timestamp: errorResponse.timestamp
    });

    // Send the response
    response.status(statusCode).json(errorResponse);
  }
}
