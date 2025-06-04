import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
  Inject,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ErrorResponseDto } from '../dto/error-response.dto';
import { ErrorLoggerService } from '../../logger/error-logger.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    @Inject(ErrorLoggerService)
    private readonly errorLogger: ErrorLoggerService,
  ) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest();

    // Determine HTTP status code
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Extract error message
    let message: string | string[];
    let errorType: string | undefined;

    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object') {
        const exceptionObj = exceptionResponse as Record<string, any>;
        message = exceptionObj.message || exception.message;
        errorType = exceptionObj.error;
      } else {
        message = exception.message;
      }
    } else if (exception instanceof Error) {
      // For standard JS errors
      message = exception.message;
      errorType = exception.name;
    } else {
      // For unknown exceptions
      message = 'An unexpected error occurred';
      errorType = 'Internal Server Error';
    }

    // Ensure the message is always an array for consistency
    if (typeof message === 'string') {
      message = [message];
    }

    // Get a request path and method
    const path = httpAdapter.getRequestUrl(request);
    const method = request.method || 'UNKNOWN';

    // Create standardized error response
    const errorResponse = new ErrorResponseDto(
      httpStatus,
      message,
      path,
      method,
      errorType,
    );

    // Log the error with enhanced context
    this.errorLogger.logError(exception, request, {
      statusCode: httpStatus,
      errorType,
      timestamp: errorResponse.timestamp,
      isHttpException: exception instanceof HttpException,
    });

    // In production, don't expose stack traces or internal error details
    if (
      process.env.NODE_ENV === 'production' &&
      httpStatus === HttpStatus.INTERNAL_SERVER_ERROR
    ) {
      errorResponse.message = ['An unexpected error occurred'];
    }

    // Send the response
    httpAdapter.reply(ctx.getResponse(), errorResponse, httpStatus);
  }
}
