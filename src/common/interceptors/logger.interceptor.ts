import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { PinoConfigService } from '../../logger/pino-config.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(private readonly logger: PinoConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const controllerName = context.getClass().name;
    const handlerName = context.getHandler().name;
    const now = Date.now();

    // Log request with structured data
    this.logger.info(
      {
        type: 'request',
        method,
        url,
        controller: controllerName,
        handler: handlerName,
        userId: (req as any).user?.id,
        context: LoggerInterceptor.name,
      },
      `Request - ${method} ${url}`,
    );

    return next.handle().pipe(
      map((data) => {
        const duration = Date.now() - now;

        // Log response with structured data
        this.logger.info(
          {
            type: 'response',
            method,
            url,
            controller: controllerName,
            handler: handlerName,
            duration,
            userId: (req as any).user?.id,
            context: LoggerInterceptor.name,
          },
          `Response - ${method} ${url} (${duration}ms)`,
        );

        return data;
      }),
    );
  }
}
