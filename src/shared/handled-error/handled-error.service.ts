import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { mongo } from 'mongoose';
import { HandlerErrorServiceModel } from './model/handler-error.service.model';
import { ErrorCode } from './config/error-code';
import { ErrorLoggerService } from '../../logger/error-logger.service';
import { Request } from 'express';

@Injectable()
export class HandledErrorService implements HandlerErrorServiceModel {
  constructor(private readonly errorLoggerService: ErrorLoggerService) {}

  /**
   * Handles database-related errors and logs them with context.
   *
   * @param error The error object to handle.
   * @param messages Additional error context to display.
   * @param request Optional request object for enhanced logging.
   */
  handlerErrorDb(
    error: unknown,
    messages: string = '',
    request?: Request,
  ): never {
    this.errorLoggerService.logError(error, request, {
      customMessage: messages,
    });

    if (error instanceof mongo.MongoError) {
      if (error.code === ErrorCode.conflictDb) {
        const keysContent = RegExp(/{([^}]*)}/).exec(error.message)?.[1];
        throw new ConflictException(
          messages + keysContent + 'duplicated' || error.message,
        );
      }
    }

    throw new InternalServerErrorException(
      'Internal server error',
      error as any,
    );
  }
}
