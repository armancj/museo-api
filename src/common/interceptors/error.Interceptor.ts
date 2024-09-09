import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataConflictFoundException } from '../exceptions/data-conflict-found.exception';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError((err, caught) => {
                if (err.code === 11000) {
                    return throwError(() => new DataConflictFoundException(err.keyValue));
                }
                return throwError(() => err);
            }),
        );
    }
}
