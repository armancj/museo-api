import {
  Injectable,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, from, firstValueFrom } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CountryModel } from '../../address/country/entities/country.model';
import { Country } from '../../address/country/entities/country.entity';
import { EventEmitter } from './event-emitter.const';
import { CountryNotFoundException } from './exception/country-not-found.exception';
import { ProvinceModel } from '../../address/province/entities/province.model';
import { Province } from '../../address/province/entities/province.entity';
import { ProvinceNotFoundException } from './exception/province-not-found.exception';
import { MunicipalityNotFoundException } from './exception/municipality-not-found.exception';

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

  emit<T>({ event, values }: EmitParams<T>): boolean {
    try {
      return this.eventEmitter.emit(event, values);
    } catch (error) {
      console.error('Error al emitir el evento:', error);
      return false;
    }
  }

  emitAsync<T, R = T>({
    event,
    exception,
    values,
  }: EmitAsyncParams<T>): Observable<R> {
    return from(this.eventEmitter.emitAsync(event, values)).pipe(
      map((result: unknown) => {
        if (
          !result ||
          (Array.isArray(result) &&
            result.every((item) => item === null || item === undefined))
        ) {
          throw new exception();
        }
        return Array.isArray(result) && result.length === 1
          ? (result[0] as R)
          : (result as R);
      }),
      catchError((err: unknown): never => {
        if (err instanceof HttpException) {
          throw err;
        }
        throw new InternalServerErrorException(
          'An unexpected error occurred',
          err,
        );
      }),
    );
  }

  async checkCountryExists(name: string) {
    const countryObserver = await this.emitAsync<
      Partial<CountryModel>,
      Country
    >({
      event: EventEmitter.countryFound,
      values: { name, deleted: false },
      exception: CountryNotFoundException,
    });

    await firstValueFrom(countryObserver);
  }

  async checkProvinceExists(name: string) {
    const provinceObserver = await this.emitAsync<
      Partial<ProvinceModel>,
      Province
    >({
      event: EventEmitter.provinceFound,
      values: { name, deleted: false },
      exception: ProvinceNotFoundException,
    });

    await firstValueFrom(provinceObserver);
  }

  async checkMunicipalityExists(name: string) {
    const MunicipalityObserver = await this.emitAsync<
      Partial<ProvinceModel>,
      Province
    >({
      event: EventEmitter.municipalityFound,
      values: { name, deleted: false },
      exception: MunicipalityNotFoundException,
    });

    await firstValueFrom(MunicipalityObserver);
  }
}
