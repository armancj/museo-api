import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { Maybe } from "../../common/lib/maybe.lib";

type ExceptionConstructor<T extends HttpException> = new (...args: any[]) => T;
@Injectable()
export class EventEmitter2Adapter {
  constructor(private eventEmitter: EventEmitter2) {}

  emit<T>(event: string | string[], ...values: any[]): T {
    return this.eventEmitter.emit(event, ...values) as T;
  }

  async emitAsync<T, R = T>(
    event: string | string[],
    exception: ExceptionConstructor<HttpException>,
    ...values: Partial<R>[]
  ): Promise<R> {
    const result = await this.eventEmitter.emitAsync(event, ...values);

    if (
      !result ||
      result.every((item) => item === null || item === undefined) ||
      (result[0] instanceof Maybe && result[0].isEmpty())
    ) {
      if (exception) throw new exception();
    }

    return result.length === 1 ? result[0] : (result as unknown as R);
  }

  on(event: string | string[], listener: (...values: any[]) => void) {
    this.eventEmitter.on(event, listener);
  }
}
