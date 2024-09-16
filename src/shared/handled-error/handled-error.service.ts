import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { mongo } from 'mongoose';
import { HandlerErrorServiceModel } from './model/handler-error.service.model';
import { ErrorCode } from './config/error-code';

@Injectable()
export class HandledErrorService implements HandlerErrorServiceModel {
  handlerErrorDb(error: unknown, messages?: string): never {
    if (error instanceof mongo.MongoError) {
      if (error.code === ErrorCode.conflictDb) {
        const keysContent = RegExp(/{([^}]*)}/).exec(error.message)?.[1];
        throw new ConflictException(
          messages + keysContent + 'duplicated' || error.message,
        );
      }
    }
    console.error(error);
    throw new InternalServerErrorException(
      'Internal server error',
      error as any,
    );
  }
}
