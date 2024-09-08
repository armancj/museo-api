import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  logger = new Logger(LoggerInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const now = Date.now();
    this.logger.log(`request - ${method} ${url} - ${context.getClass().name}`);
    return next.handle().pipe(
      map((data) => {
        this.logger.log(
          `response - ${method} ${url} - ${context.getClass().name} (${
            Date.now() - now
          }ms)`,
        );
        return data;
      }),
    );
  }
}
