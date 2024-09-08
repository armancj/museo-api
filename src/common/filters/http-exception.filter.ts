import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let error: object;
    if (statusCode < HttpStatus.INTERNAL_SERVER_ERROR)
      error =
        typeof response === 'string'
          ? { message: [exceptionResponse] }
          : (exceptionResponse as object);
    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR)
      error = { message: [exception.message] };

    const responseError = {
      statusCode,
      ...error,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    };

    const messageError = Object.keys(responseError)
      .map((key) => `${key}: ${responseError[key]}`)
      .join(', ');

    this.logger.error(messageError);

    response.status(statusCode).json(responseError);
  }
}
