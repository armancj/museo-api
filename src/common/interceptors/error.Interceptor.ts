import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataConflictFoundException } from '../exceptions/data-conflict-found.exception';
import { ErrorLoggerService } from '../../logger/error-logger.service';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  constructor(private readonly errorLoggerService: ErrorLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      catchError((err) => {
        // Log the error with context information
        this.errorLoggerService.logError(err, request, {
          controller: context.getClass().name,
          handler: context.getHandler().name,
        });

        // Transform MongoDB duplicate key errors
        if (err.code === 11000) {
          return throwError(() => new DataConflictFoundException(err.keyValue));
        }

        return throwError(() => err);
      }),
    );
  }
}
