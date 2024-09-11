import { Injectable, HttpException, InternalServerErrorException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

type ExceptionConstructor<T extends HttpException> = new (...args: any[]) => T;
interface EmitParams<T> {
    event: string | string[];
    values: Partial<T>;
}

interface EmitAsyncParams<T> {
    event: string | string[];
    exception: ExceptionConstructor<HttpException>;
    values: Partial<T>;
}


@Injectable()
export class EventEmitter2Adapter {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emit<T>({event, values}: EmitParams<T>): boolean {
    try {
      return this.eventEmitter.emit(event, values);
    } catch (error) {
      console.error('Error al emitir el evento:', error);
      return false;
    }
  }

    emitAsync<T, R = T>({ event, exception, values }: EmitAsyncParams<T>): Observable<R> {
        return from(this.eventEmitter.emitAsync(event, values)).pipe(
            map((result: unknown) => {
                if (
                    !result ||
                    (Array.isArray(result) && result.every((item) => item === null || item === undefined))
                ) {
                    throw new exception();
                }
                return (Array.isArray(result) && result.length === 1) ? result[0] as R : result as R;
            }),
            catchError((err): never => {
                if (err instanceof HttpException) {
                    throw err;
                }
                throw new InternalServerErrorException('An unexpected error occurred', err);
            })
        );
    }


    on(event: string | string[], listener: (...values: any[]) => void): void {
    this.eventEmitter.on(event, listener);
  }
}
